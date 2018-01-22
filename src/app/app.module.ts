import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    imports: [
        NativeScriptModule,
    ],
    declarations: [
        HomeComponent,
    ],
    bootstrap: [
        HomeComponent
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
