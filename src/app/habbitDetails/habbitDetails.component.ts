import { Component, ViewChild } from "@angular/core"
import {OVERLAY_PROVIDERS} from '@angular2-material/core';
import { MdDialog } from "ng2-material";

@Component({
    selector: 'app-habbit-details',
    templateUrl: './app/habbitDetails/habbitDetails.component.html',
    styleUrls: [ './app/habbitDetails/habbitDetails.component.css' ],
    providers: OVERLAY_PROVIDERS
})
export class HabbitDetailsComponent {
    @ViewChild('dialog') dialog: MdDialog;
    close(isSave: Boolean) {

    };
    show() {
        this.dialog.show()
    }
}