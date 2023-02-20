import { IPositionExtended } from "./types";

export interface ISpriteManager{
    getPosition(key:string):IPositionExtended|null
    exist(keyword: string):boolean
}