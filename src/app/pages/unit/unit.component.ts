import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as fs from "tns-core-modules/file-system";

import { Unit } from "~/shared/unit";
import { UnitService } from "~/shared/unit.service";
import { Sound } from "~/shared/sound";
import { SoundService } from "~/shared/sound.service";

enum AnimType {
    fiddle,
    talk
}

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html"
})
export class UnitComponent implements OnInit {
    faction: string;
    unit: Unit;
    sounds: Array<Sound>;
    portraitSrc: string;
    private portrait;
    private animTimeout: number;

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
        this.portraitSrc = this.getPortraitFile(AnimType.fiddle);
    }

    playSound(soundFile: string) {
        this.soundService.play(soundFile);
    }

    private getRandomAnim(animations: string[]): string {
        return animations[Math.floor(Math.random() * animations.length)];
    }

    private getPortraitFile(type: AnimType) {
        var animations = (type === AnimType.talk) ?
            this.unit.talkAnimations : this.unit.fiddleAnimations;
        var anim = this.getRandomAnim(animations);
        var portraitFile = fs.path.join(
            fs.knownFolders.currentApp().path,
            'assets/portraits',
            this.unit.id,
            anim + '.gif'
        );
        if (fs.File.exists(portraitFile)) {
            return portraitFile;
        } else {
            console.warn("Portrait file", this.unit.id + '/' + anim + '.gif not found.');
            return '';
        }
    }

    portraitLoaded(args) {
        this.portrait = args.object;
        this.updatePortrait(AnimType.fiddle);
    }

    private updatePortrait(type: AnimType) {
        if (this.animTimeout !== null) {
            this.portrait.src = this.getPortraitFile(type);
            clearTimeout(this.animTimeout);
        }
        this.animTimeout = setTimeout(() => {
            this.updatePortrait(type)
        }, this.portrait.getDuration());
    }
}