import { Component, Input, ElementRef, HostListener, EventEmitter, Output } from "@angular/core";
import { SelectService } from "./select.service";

@Component({
    selector: "app-option",
    templateUrl: "app/select/option.component.html",
    styleUrls: [ "app/select/option.component.css" ],
})
export class  OptionComponent {
    isPreSelected: Boolean = false;
    isValueSelected: Boolean = false;
    @Input() value: any
    @Output() onSelected = new EventEmitter<OptionComponent>();
    constructor(private elt:ElementRef, private selectService: SelectService) {}
    toggleSelect(selected: Boolean) {
        this.isPreSelected = selected;
    }
    valueSelect(selected: Boolean) {
        this.isValueSelected = selected;
    }
    getContent() {
        return this.elt.nativeElement.childNodes[0].cloneNode(true);
    }
    @HostListener("mousedown", [ "$event" ])
    onClick(e: any) {
        e.stopPropagation();
        this.selectService.selectOption(this);
    }
    @HostListener("mouseenter", ["$event"])
    onMouseEnter() {
        this.selectService.mouseEnterOption(this);
    }
}