import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unit } from "~/shared/unit";
import { UnitService } from "~/shared/unit.service";
import { Sound } from "~/shared/sound";
import { SoundService } from "~/shared/sound.service";
import { PortraitService } from "~/shared/portrait.service";
import { AnimType } from "~/shared/anim-type";

@Component({
    selector: "unit",
    moduleId: module.id,
    templateUrl: "./unit.html",
    providers: [
        PortraitService
    ]
})
export class UnitComponent implements OnInit {
    faction: string;
    unit: Unit;
    sounds: Array<Sound>;
    portraitSrc: string;

    constructor(
        private route: ActivatedRoute,
        private unitService: UnitService,
        private soundService: SoundService,
        private portraitService: PortraitService
    ) {}

    ngOnInit(): void {
        var id = this.route.snapshot.params['id'];
        this.faction = this.route.snapshot.params['faction'];
        this.unit = this.unitService.getUnit(id);
        this.sounds = (this.unit && this.unit.sounds) || [];
        this.portraitService.unit = this.unit;
        this.portraitSrc = this.portraitService.getFile(AnimType.fiddle);
    }

    portraitLoaded(args): void {
        this.portraitService.portrait = args.object;
        this.portraitService.update(AnimType.fiddle);
    }

    async playSound(sound: Sound) {
        if (sound.text !== '') {
            this.portraitSrc = this.portraitService.update(AnimType.talk);
        } else if (this.portraitService.IsTalking()) {
            this.portraitSrc = this.portraitService.update(AnimType.fiddle);
        }
        await this.soundService.play(sound.sound);
        if (this.portraitService.IsTalking()) {
            this.portraitSrc = this.portraitService.update(AnimType.fiddle);
        }
    }
}