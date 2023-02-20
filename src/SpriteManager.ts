import { ISpriteManager } from "./iSpriteManager";
import { InfoImage, IPositionExtended } from "./types";

export class SpriteManager implements ISpriteManager{
    _sprite:InfoImage[]
    constructor(sprite:InfoImage[]){
        this._sprite=sprite
    }
    getPosition(keyword: string): IPositionExtended|null {
        let image:InfoImage|undefined
        image=this._sprite.find(image=>image.keys.some(key=>key===keyword))
        return image?image as IPositionExtended:null
    }
    exist(keyword: string):boolean{
        return this.getPosition(keyword)?true:false
    }
}