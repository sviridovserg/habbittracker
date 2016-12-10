import { Component, Input, ElementRef, HostListener, EventEmitter, Output } from "@angular/core"

@Component({
    selector: "app-option",
    templateUrl: "app/select/option.component.html",
    styleUrls: [ "app/select/option.component.css" ]
})
export class  OptionComponent {
    isSelected: Boolean = false;
    @Input() value: any
    @Output() onSelected = new EventEmitter<OptionComponent>();
    constructor(private elt:ElementRef) {}
    toggleSelect(selected: Boolean) {
        this.isSelected = selected;
    }
    getContent() {
        return this.elt.nativeElement.childNodes[0].cloneNode(true);
    }
    @HostListener("click", [ "$event" ])
    onClick() {
        this.onSelected.emit(this);
    }
}