export class Util {
    static delay(callback, ms) {
        setTimeout(() => {
            callback();
        }, ms);
    }
}
