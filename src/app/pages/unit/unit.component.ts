import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unit } from "./../../shared/unit";
import { UnitService } from "./../../shared/unit.service";

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html"
})
export class UnitComponent implements OnInit {
    id: String;
    unit: Unit;

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        var faction: String = this.route.snapshot.params['faction'];
        this.unit = this.unitService.loadFaction(faction).getUnit(this.id);
    }
}