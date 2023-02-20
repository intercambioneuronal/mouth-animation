export class DrawerImage2D {
    constructor(context) {
        this._context = context;
    }
    drawImage(image, position) {
        if (position) {
            this._context.drawImage(image, position.xSource, position.ySource, position.widthSource, position.heightSource, position.xDestination, position.yDestination, position.widthDestination, position.heightDestination);
        }
    }
}
