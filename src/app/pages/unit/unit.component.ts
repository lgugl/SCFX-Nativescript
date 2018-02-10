import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as fs from "tns-core-modules/file-system";

import { Unit } from "~/shared/unit";
import { UnitService } from "~/shared/unit.service";
import { Sound } from "~/shared/sound";
import { SoundService } from "~/shared/sound.service";

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html"
})
export class UnitComponent implements OnInit {
    faction: string;
    unit: Unit;
    sounds: Array<Sound>;
    portrait: string;

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
        var fiddleAnim = this.getRandomAnim(this.unit.fiddleAnimations);
        var app = fs.knownFolders.currentApp(),
            portraitFile = app.path + '/assets/portraits/' + this.unit.id + '/' + fiddleAnim + '.gif';
        if (fs.File.exists(portraitFile)) {
            this.portrait = portraitFile;
        } else {
            console.warn("Portrait file", this.unit.id + '/' + fiddleAnim + '.gif not found.');
            this.portrait = '';
        }
    }

    playSound(soundFile: string) {
        this.soundService.play(soundFile);
    }

    private getRandomAnim(animations: string[]): string {
        return animations[Math.floor(Math.random() * animations.length)];
    }
}