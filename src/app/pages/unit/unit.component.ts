import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unit } from "~/models/unit";
import { UnitService } from "~/services/unit.service";
import { Sound } from "~/models/sound";
import { SoundService } from "~/services/sound.service";
import { PortraitService } from "~/services/portrait.service";
import { AnimType } from "~/models/anim-type";

import { StackLayout } from "ui/layouts/stack-layout";
import { Page } from "ui/page";

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
        private portraitService: PortraitService,
        private page:Page
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
        // set active state for styling
        let element: StackLayout = this.page.getViewById(sound.id);
        element.addPseudoClass("playSound");
        let animationTime: number = 1000;
        setTimeout(() => {
            element.deletePseudoClass("playSound");
        }, animationTime);

        // portrait & sound
        this.portraitSrc = this.portraitService.update(AnimType.talk);
        await this.soundService.play(sound.sound);
        this.portraitSrc = this.portraitService.update(AnimType.fiddle);

    }
}