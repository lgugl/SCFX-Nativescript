import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
var SoundModule = require("nativescript-sound");

import { Sound } from "./sound";
import { Unit } from "./unit";
import { UnitService } from "./unit.service";

@Injectable()
export class SoundService {
    private soundFiles = {};

    constructor(private unitService: UnitService) {}

    preload(unitId: string): void {
        // don't preload if already in memory
        if (this.soundFiles[unitId] !== undefined) {
            return;
        }
        this.soundFiles[unitId] = {};
        var unit = this.unitService.getUnit(unitId);
        unit && unit.sounds.forEach(sound => {
            this.soundFiles[unitId][sound.id] = SoundModule.create('~/assets/sounds/' + sound.sound + '.ogg');
        });
    }

    play(unitId: string, soundId: string) {
        try {
            this.soundFiles[unitId][soundId].play();
        } catch(e) {
            console.error("Unable to play sound", soundId, "for unit", unitId);
        }
    }
}