export class SpriteManager {
    constructor(sprite) {
        this._sprite = sprite;
    }
    getPosition(keyword) {
        let image;
        image = this._sprite.find(image => image.keys.some(key => key === keyword));
        return image ? image : null;
    }
    exist(keyword) {
        return this.getPosition(keyword) ? true : false;
    }
}
