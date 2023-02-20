export class ClearerImage2D {
    constructor(context) {
        this._context = context;
    }
    clearImage() {
        let canvas = this._context.canvas;
        this._context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
