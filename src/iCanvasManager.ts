import { IContextGenerator } from "./iContextGenerator"

export interface ICanvasManager{
    _contextGenerator:IContextGenerator
    context:RenderingContext|null
    getContext():RenderingContext|null
}