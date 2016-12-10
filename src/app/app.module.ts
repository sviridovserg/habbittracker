import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';


import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdIconModule, MdIconRegistry } from "@angular2-material/icon";
import { MdButtonModule } from "@angular2-material/button";
import { MdCoreModule } from "@angular2-material/core"

import { MdInputModule } from "@angular/material" 

import { Ng2MaterialModule, MATERIAL_BROWSER_PROVIDERS } from "ng2-material";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DayStateComponent } from './dayState/dayState.component';
import { HabbitDetailsComponent } from './habbitDetails/habbitDetails.component';

import { SelectComponent } from './select/select.component';
import { OptionComponent } from './select/option.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DayStateComponent,
        HabbitDetailsComponent,
        SelectComponent,
        OptionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        MdToolbarModule,
        MdIconModule,
        MdCoreModule,
        MdButtonModule,
        MdInputModule,
        Ng2MaterialModule
    ],
    bootstrap: [ AppComponent ],
    providers: [ MdIconRegistry ].concat(MATERIAL_BROWSER_PROVIDERS)
})

export class AppModule {
}
