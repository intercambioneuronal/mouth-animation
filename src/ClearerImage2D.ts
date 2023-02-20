import { IClearerImage } from "./iClearerImage";

export class ClearerImage2D implements IClearerImage{
    _context:CanvasRenderingContext2D
    constructor(context:RenderingContext){
        this._context=<CanvasRenderingContext2D>context
    }
    clearImage(): void {
        let canvas= this._context.canvas
        this._context.clearRect(0,0,canvas.width,canvas.height)
    }
}