import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
import { TNSPlayer } from "nativescript-audio";

import { Sound } from "./sound";

@Injectable()
export class SoundService {
    private player: TNSPlayer;

    constructor() {
        this.player = new TNSPlayer();
        this.player.debug = false;
    }

    play(soundFile: string) {
        this.player.playFromFile({
            audioFile: "~/assets/sounds/" + soundFile + ".ogg",
            loop: false,
            completeCallback: (args: any) => {
                this.player.dispose();
            },
            errorCallback: (args: any) => {
                console.error("sound error:", args.error);
            }
        })
        .catch(function() {
            console.error("Unable to play sound", soundFile);
        });
    }
}