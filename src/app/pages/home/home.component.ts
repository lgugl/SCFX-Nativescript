import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { EventData } from "ui/page";

@Component({
    selector: "home",
    templateUrl: "./pages/home/home.html",
    styleUrls: ["./css/home.css"]
})

export class HomeComponent {
    private factButton: any;

    constructor(
        private router: Router
    ) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.factButton) {
                    setTimeout(function() {
                        this.factButton.deletePseudoClass("active");
                    }.bind(this), 0);
                }
            }

        });
    }

    onFactButtonTap(event: EventData): void {
        this.factButton = event.object;
        this.factButton.addPseudoClass("active");
    }
}