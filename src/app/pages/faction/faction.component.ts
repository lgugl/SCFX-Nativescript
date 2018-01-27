import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UnitService } from "./../../shared/unit.service";

@Component({
  selector: "faction",
  moduleId: module.id,
  templateUrl: "./faction.html"
})

export class FactionComponent implements OnInit {
    id: string;
    units: Array<Object> = [];

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.units = this.unitService.loadFaction(this.id).getUnits();
    }
}