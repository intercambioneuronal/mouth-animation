export interface InfoImage{
    keys:string[]
    xSource:number
    ySource:number
    widthSource:number
    heightSource:number
    xDestination:number
    yDestination:number
    widthDestination:number
    heightDestination:number
}
type IPositionExtended = Omit<InfoImage,"keys">