import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unit } from "./../../shared/unit";
import { UnitService } from "./../../shared/unit.service";
import { Sound } from "./../../shared/sound";
import { SoundService } from "./../../shared/sound.service";

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html"
})
export class UnitComponent implements OnInit {
    faction: string;
    unit: Unit;
    sounds: Array<Sound>;

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService,
        private soundService: SoundService
    ) {}

    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        this.faction = this.route.snapshot.params['faction'];
        this.unit = this.unitService.getUnit(id);
        this.sounds = this.unit.sounds;
        this.soundService.preload(id);
    }

    playSound(unitId: string, soundId: string) {
        this.soundService.play(unitId, soundId);
    }
}