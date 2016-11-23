import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MATERIAL_BROWSER_PROVIDERS} from "ng2-material";
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [MATERIAL_BROWSER_PROVIDERS]);
