import { Sound } from "./sound";

export interface Unit {
    id: string,
    name: string,
    frenchName: string,
    fiddleAnimations: Array<string>,
    talkAnimations: Array<string>,
    sounds: Array<Sound>
}

/*
"PAdvisor": {
    "name": "Advisor",
    "frenchName": "Conseillé",
    "fiddleAnimations": null,
    "talkAnimations": null,
    "sounds": {
        "update1": {
            "name": "Update 1",
            "sound": "padupd00",
            "text": "We are under attack!"
        },


"fiddleAnimations": "[\"Fid00\",\"Fid01\",\"Fid02\"]",
"talkAnimations": "[\"Tlk00\",\"Tlk01\"]",
*/