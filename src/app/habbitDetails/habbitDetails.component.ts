import { Component, ViewChild, Input } from "@angular/core"
import { OVERLAY_PROVIDERS } from '@angular2-material/core';
import { MdDialog } from "ng2-material";

class Day {
    label: String
}

@Component({
    selector: 'app-habbit-details',
    templateUrl: './app/habbitDetails/habbitDetails.component.html',
    styleUrls: [ './app/habbitDetails/habbitDetails.component.css' ],
    providers: OVERLAY_PROVIDERS
})
export class HabbitDetailsComponent {
    @ViewChild('dialog') dialog: MdDialog;
    @Input()isCreate: Boolean;
    selectedDay: Day;
    public days: Array<Day> = [
        {
            label: "Monday"
        },
        {
            label: "Tuesday"
        },
        {
            label: "Wednesday"
        }
    ];
    constructor() {
        this.isCreate =  true;
    };
    close(isSave: Boolean) {

    };
    show() {
        this.dialog.show()
    }
}