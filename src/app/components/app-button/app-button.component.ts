import { Component, Input, OnInit } from "@angular/core";

const path = "./components/app-button/";

/**
 * usage example: <app-button text="hello world!" route="/faction/protoss"></app-button>
 */

@Component({
    selector: "app-button",
    styleUrls: [path + "app-button.css"],
    templateUrl: path + "app-button.html"
})
export class AppButtonComponent {
    @Input() text: string = "";
    @Input() class: string = "app-button";
    @Input() route: string = "";
    vText: string;
    vClass: string;
    vRouterLink: string;

    constructor() {}

    ngOnInit() {
        this.vText = this.text;
        this.vClass = this.class;
        this.vRouterLink = this.route;
    }
}