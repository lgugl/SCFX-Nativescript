import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unit } from "./../../shared/unit";
import { UnitService } from "./../../shared/unit.service";
import { Sound } from "./../../shared/sound";

var SoundModule = require("nativescript-sound");

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html"
})
export class UnitComponent implements OnInit {
    faction: string;
    unit: Unit;
    sounds: Array<Sound>;
    soundFiles = {};

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService
    ) {}

    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        this.faction = this.route.snapshot.params['faction'];
        this.unit = this.unitService.loadFaction(this.faction).getUnit(id);
        this.sounds = this.unit.sounds;
        this.sounds.forEach(sound => {
            this.soundFiles[sound.id] = SoundModule.create('~/assets/sounds/' + sound.sound + '.ogg');
        });
    }

    playSound(soundId: string) {
        this.soundFiles[soundId].play();
    }
}