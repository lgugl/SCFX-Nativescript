import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
var SoundModule = require("nativescript-sound");

import { Sound } from "./sound";
import { Unit } from "./unit";
import { UnitService } from "./unit.service";

@Injectable()
export class SoundService {
    soundFiles = {};

    constructor(private unitService: UnitService) {}

    preload(unitId: string, faction: string): void {
        if (this.soundFiles[unitId] !== undefined) {
            return;
        }
        this.soundFiles[unitId] = {};
        var unit = this.unitService.loadFaction(faction).getUnit(unitId);
        unit.sounds.forEach(sound => {
            this.soundFiles[unitId][sound.id] = SoundModule.create('~/assets/sounds/' + sound.sound + '.ogg');
        });
    }
}