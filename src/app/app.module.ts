import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Gif", () => require("nativescript-gif").Gif);

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { UnitService } from "./services/unit.service";
import { SoundService } from "./services/sound.service";

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
export class AppModule {
    constructor(
        // only to preload faction json files (see UnitService constructor)
        private unitService: UnitService
    ) {}
}
