import { ICanvasManager } from "./iCanvasManager";
import { IClearerImage } from "./iClearerImage";
import { IClearingImage } from "./iClearingImage";
import { IContextGenerator } from "./iContextGenerator";
import { IDrawerImage } from "./iDrawerImage";
import { IDrawingImage } from "./iDrawingImage";
import { IPositionExtended } from "./types";

export class CanvasManager implements ICanvasManager,IDrawingImage,IClearingImage{
    _contextGenerator:IContextGenerator
    context:RenderingContext|null
    constructor(contextGenerator:IContextGenerator){
        this._contextGenerator=contextGenerator
        this.context=this.getContext()
    }
    getContext():RenderingContext|null{
        return this._contextGenerator.generateContext()
    }
    drawImage(drawerImage: IDrawerImage,image:HTMLImageElement
        ,position:IPositionExtended|null): void {
            drawerImage.drawImage(image,position)
    }
    clearImage(clearerImage: IClearerImage): void {
        clearerImage.clearImage()
    }
}