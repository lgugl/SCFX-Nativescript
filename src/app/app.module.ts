import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { UnitService } from "./shared/unit.service";
import { SoundService } from "./shared/sound.service";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        UnitService,
        SoundService
    ]
})
export class AppModule { }
