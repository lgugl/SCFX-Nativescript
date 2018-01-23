import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "ns-home",
    template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent {
    constructor(private page:Page) {}
    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}