import { Component, Input } from "@angular/core"

@Component({
    selector: 'app-day-state',
    templateUrl: './app/dayState/dayState.component.html',
    styleUrls: [ './app/dayState/dayState.component.css' ]
})
export class DayStateComponent {
    @Input() public isCompleted: Boolean;
}