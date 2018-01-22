import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["css/test.css"]
})

export class AppComponent {
    constructor(page: Page) {
        page.actionBarHidden = true;
    }
    /*constructor(private page:Page) {}
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg-image";
    }*/
}