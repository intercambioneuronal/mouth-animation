export class ContextGenerator2D {
    constructor(canvas) {
        this._canvas = canvas;
    }
    generateContext() {
        let canvasElement;
        canvasElement = document.getElementById(this._canvas.idCanvas);
        return canvasElement.getContext(this._canvas.type);
    }
}
