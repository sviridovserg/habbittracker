import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { OptionComponent } from "./option.component";

@Injectable()
export class SelectService {
    private optionSelectedSource = new Subject<OptionComponent>();
    private optionMouseEnterSource = new Subject<OptionComponent>();

    optionSelected$ = this.optionSelectedSource.asObservable();
    optionMouseEnter$ = this.optionMouseEnterSource.asObservable();

    selectOption(opt: OptionComponent) {
        this.optionSelectedSource.next(opt);
    }

    mouseEnterOption(opt: OptionComponent) {
        this.optionMouseEnterSource.next(opt);
    }
}