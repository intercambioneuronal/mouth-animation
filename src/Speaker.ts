import { ISpeaker } from "./iSpeaker";

export class Speaker implements ISpeaker{
    _synth:SpeechSynthesis
    constructor(){
        this._synth=window.speechSynthesis
    }
    speak(text: string): void {
        const utterThis = new SpeechSynthesisUtterance(text);
        this._synth.speak(utterThis)
    }
}