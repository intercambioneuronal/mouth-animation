import { IDrawerImage } from "./iDrawerImage";
import { IPositionExtended } from "./types";

export class DrawerImage2D implements IDrawerImage{
    _context:CanvasRenderingContext2D
    constructor(context:RenderingContext){
        this._context=<CanvasRenderingContext2D>context
    }
    drawImage(image: HTMLImageElement, position: IPositionExtended): void {
        if(position){
            this._context.drawImage(image,
                position.xSource,position.ySource,
                position.widthSource,position.heightSource,
                position.xDestination,position.yDestination,
                position.widthDestination,position.heightDestination
                )            
        }
    }
}