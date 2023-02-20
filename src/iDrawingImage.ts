import { IDrawerImage } from "./iDrawerImage";
import { IPositionExtended } from "./types";

export interface IDrawingImage{
    drawImage(drawerImage:IDrawerImage,image: HTMLElement, position: IPositionExtended|null):void
}