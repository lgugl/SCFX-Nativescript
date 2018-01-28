import { Sound } from "./sound";

export interface Unit {
    id: string,
    name: string,
    frenchName: string,
    fiddleAnimations: Array<string>,
    talkAnimations: Array<string>,
    sounds: Array<Sound>
}