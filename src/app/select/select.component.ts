import { Component, Input, HostListener, ElementRef, ViewChild, ContentChildren, QueryList,forwardRef  } from "@angular/core"
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from "rxjs"
import * as _ from "lodash";
import { OptionComponent } from "./option.component";
import {SelectService } from "./select.service";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({
    selector: "app-select",
    templateUrl: "app/select/select.component.html",
    styleUrls: [ "app/select/select.component.css" ],
    providers: [ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR ]
})
export class  SelectComponent implements ControlValueAccessor  {
    @Input() placeholder: String;
    @ViewChild("host") host: ElementRef;
    @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

    private isOpen: Boolean = false;

    private width: number;
    private dropDownTop: number;
    private dropDownLeft: number;
    private dropDownZIndex: number;

    private internalSelectedItemIndex: number = 0;
    private htmlSelectedElement: string;
    private internalValue: any = null;
    constructor(private selectService: SelectService) {
        this.selectService.optionSelected$.subscribe(opt => {
            this.internalSelectedItemIndex = this.getOptionIndex(opt);
            this.confirmSelection();
        });
        this.selectService.optionMouseEnter$.subscribe(opt => {
            this.getSelectedOptionByIndex(this.internalSelectedItemIndex).toggleSelect(false);
            this.internalSelectedItemIndex = this.getOptionIndex(opt);
            opt.toggleSelect(true);
        });
    }
    openDropDown() {
        this.width = this.host.nativeElement.offsetWidth;
        this.dropDownTop = this.host.nativeElement.offsetTop;
        this.dropDownLeft = this.host.nativeElement.offsetLeft;

        let highestZIndex: number = _.max(_.map(document.querySelectorAll('body *'), function(el: Element) {
            let zIndex = document.defaultView.getComputedStyle(el, null).getPropertyValue("z-index");
            return !zIndex || zIndex === 'auto' ? 0 : Number.parseInt(zIndex);
        }));
        this.dropDownZIndex = highestZIndex + 1;
        
        this.isOpen = !this.isOpen
        this.getSelectedOptionByIndex(this.internalSelectedItemIndex).toggleSelect(true)
    }
    private closeDropDown() {
        this.isOpen = !this.isOpen;
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
    }
    @HostListener('keydown', ['$event'])
    keyboardInput(event: any) {
        if (!this.isOpen) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        switch (event.keyCode) {
            case 40:
                this.selectNext();
                break;
            case 38:
                this.selectPrev();
                break;
            case 13:
                this.confirmSelection();
                break;
            case 27: 
                this.cancelSelection();
                break;
        }
        return false;
    }
    @HostListener('body:mousedown', ['$event'])
    outsideClick(event: any) {
        if (!this.isOpen) {
            return;
        }
        this.cancelSelection();
    }
    private selectNext() {
        if (this.internalSelectedItemIndex === this.options.length - 1) {
            return;
        }
        this.getSelectedOptionByIndex(this.internalSelectedItemIndex).toggleSelect(false);
        this.getSelectedOptionByIndex(++this.internalSelectedItemIndex).toggleSelect(true);
    }
    private selectPrev() {
        if (this.internalSelectedItemIndex === 0) {
            return;
        }
        this.getSelectedOptionByIndex(this.internalSelectedItemIndex).toggleSelect(false);
        this.getSelectedOptionByIndex(--this.internalSelectedItemIndex).toggleSelect(true);
    }
    private confirmSelection() {
        let selectedNode = this.getSelectedOptionByIndex(this.internalSelectedItemIndex);
        if (selectedNode.value !== this.internalValue) {
            this.valueSelected(selectedNode.value);
            this.htmlSelectedElement = selectedNode.getContent().innerHTML;
            if (this.onChangeCallback) {
                this.onChangeCallback(selectedNode.value);
            }
        }
        this.closeDropDown();
    }
    private cancelSelection() {
        this.closeDropDown();
    }
    private getSelectedOptionByIndex(index: Number): OptionComponent {
        return this.options.find((item, ind) => {
            return ind === index;
        });
    }
    private getSelectedOptionByValue(value: any): OptionComponent {
        return this.options.find((item, ind) => {
            return item.value === value;
        });
    }
    private getOptionIndex(opt: OptionComponent) {
        let index = -1;
        this.options.find((item, ind) => {
            if (item === opt) {
                index = ind;
            }
            return item === opt;
        });
        return index;
    }
    private valueSelected(newValue: any) {
        if (!this.internalValue && !newValue) {
            return;
        }
        if (this.internalValue) {
            this.getSelectedOptionByValue(this.internalValue).valueSelect(false);
        }
        this.internalValue = newValue;
        this.getSelectedOptionByValue(this.internalValue).valueSelect(true);
    }
    onChangeCallback: (_: any) => {

    }
    onTouchedCallback: () => {

    }
    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.internalValue) {
            this.valueSelected(value);
        }
    }
    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}