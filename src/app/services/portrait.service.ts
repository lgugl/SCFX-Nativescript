import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

import { Unit } from "~/models/unit";
import { AnimType } from "~/models/anim-type";

@Injectable()
export class PortraitService {
    public unit: Unit;
    public portrait: any;
    private animTimeout: number;

    public getFile(type: AnimType): string {
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

    public update(type: AnimType): string {
        // bypass this the first time
        if (this.animTimeout !== null) {
            this.portrait.src = this.getFile(type);
            if (this.portrait.src === '') return '';
        }

        // stop the previously timeout
        clearTimeout(this.animTimeout);

        // use the portrait gif duration to trigger the next update
        this.animTimeout = setTimeout(() => {
            this.update(type);
        }, this.portrait.getDuration());

        return this.portrait.src;
    }

    /**
     * Return true if the active portrait is a talking one
     */
    public IsTalking(): boolean {
        return /Tlk\d{2}\.gif$/.test(this.portrait.src);
    }

    private getRandomAnim(animations: string[]): string {
        return animations[Math.floor(Math.random() * animations.length)];
    }
}