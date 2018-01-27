import { Sound } from "./sound";

export interface Unit {
    id: String,
    name: String,
    frenchName: String,
    fiddleAnimations: Array<String>,
    talkAnimations: Array<String>,
    sounds: Array<Sound>
}