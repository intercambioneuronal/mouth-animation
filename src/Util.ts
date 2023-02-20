export class Util{
    static delay(callback:Function,ms:number){
        setTimeout(() => {
            callback()
        }, ms);
    }
}