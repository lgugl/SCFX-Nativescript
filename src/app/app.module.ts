import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
