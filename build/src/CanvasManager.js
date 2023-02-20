export class CanvasManager {
    constructor(contextGenerator) {
        this._contextGenerator = contextGenerator;
        this.context = this.getContext();
    }
    getContext() {
        return this._contextGenerator.generateContext();
    }
    drawImage(drawerImage, image, position) {
        drawerImage.drawImage(image, position);
    }
    clearImage(clearerImage) {
        clearerImage.clearImage();
    }
}
