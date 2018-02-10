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
        return new Promise((resolve, reject) => {
            this.player.playFromFile({
                audioFile: "~/assets/sounds/" + soundFile + ".ogg",
                loop: false,
                completeCallback: (args: any) => {
                    resolve();
                    this.player.dispose();
                },
                errorCallback: (args: any) => {
                    console.error("Audio player error:", args.error);
                    reject();
                }
            })
            .catch(function() {
                console.error("Unable to play sound", soundFile);
                reject();
            });
        });
    }
}