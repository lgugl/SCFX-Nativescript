// import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";

// import { UnitService } from "./../../shared/unit.service";

// @Component({
//     selector: "ns-faction",
//     moduleId: module.id,
//     templateUrl: "./faction.html"
// })

// export class FactionComponent implements OnInit {
//     id: string;
//     units: Array<Object> = [];

//     constructor(
//         private route: ActivatedRoute,
//         private unitService: UnitService
//     ) { }

//     ngOnInit(): void {
//         const faction = this.route.snapshot.params["id"];
//         this.id = faction;
//         // this.units = this.unitService.getUnits();
//         this.units.push({name: "A"});
//         this.units.push({name: "B"});
//         this.units.push({name: "C"});
//     }
// }

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "faction",
  moduleId: module.id,
  templateUrl: "./faction.html"
})

export class FactionComponent implements OnInit {
    id: string;
    units: Array<Object> = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.units.push({ name: "Apples" });
        this.units.push({ name: "Bananas" });
        this.units.push({ name: "Oranges" });
    }
}