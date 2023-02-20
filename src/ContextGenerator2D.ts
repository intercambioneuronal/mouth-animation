import { ICanvas } from "./iCanvas";
import { IContextGenerator } from "./iContextGenerator";

export class ContextGenerator2D implements IContextGenerator{
    _canvas:ICanvas
    constructor(canvas:ICanvas){
        this._canvas=canvas
    }
    generateContext():RenderingContext|null{
        let canvasElement:HTMLCanvasElement|null
        canvasElement=<HTMLCanvasElement> document.getElementById(this._canvas.idCanvas);
        return canvasElement.getContext(this._canvas.type)
        
    }
}