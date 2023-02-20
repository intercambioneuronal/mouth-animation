export class Speaker {
    constructor() {
        this._synth = window.speechSynthesis;
    }
    speak(text) {
        const utterThis = new SpeechSynthesisUtterance(text);
        this._synth.speak(utterThis);
    }
}
