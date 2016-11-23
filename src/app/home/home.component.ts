import {Component} from '@angular/core';
import * as moment from 'moment';

import { WeekProgress } from '../data/weekProgress'


@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent {
    habbitsProgress: WeekProgress[]
    weekDays: String[] = new Array<String>();
    constructor() {
        let m = moment().startOf('week');
        let i = 0;
        while (i < 7) {
            this.weekDays.push(m.add(1, 'd').format("D ddd"));
            i++;
        }

        this.habbitsProgress = [
            {
                habbitName: 'No Smoking',
                weekStat: [
                    {
                        day: 0,
                        isCompleted: true
                    }, {
                        day: 1,
                        isCompleted: false
                    }, {
                        day: 2,
                        isCompleted: false
                    }, {
                        day: 3,
                        isCompleted: false
                    }, {
                        day: 4,
                        isCompleted: false
                    }, {
                        day: 5,
                        isCompleted: true
                    }, {
                        day: 6,
                        isCompleted: true
                    }
                ]
            }, {
                habbitName: 'No Drinking',
                weekStat: [
                    {
                        day: 0,
                        isCompleted: true
                    }, {
                        day: 1,
                        isCompleted: true
                    }, {
                        day: 2,
                        isCompleted: true
                    }, {
                        day: 3,
                        isCompleted: true
                    }, {
                        day: 4,
                        isCompleted: true
                    }, {
                        day: 5,
                        isCompleted: false
                    }, {
                        day: 6,
                        isCompleted: false
                    }
                ]
            }

        ];
    }
}
