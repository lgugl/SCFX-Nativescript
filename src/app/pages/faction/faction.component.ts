import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UnitService } from "~/services/unit.service";
import { Unit } from "~/models/unit";

@Component({
  selector: "faction",
  moduleId: module.id,
  templateUrl: "./faction.html"
})
export class FactionComponent implements OnInit {
    id: string;
    units: Unit[];// => Array<Unit>

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.units = this.unitService.getUnits(this.id);
    }
}