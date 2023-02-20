import { CanvasManager } from "./CanvasManager.js";
import { ContextGenerator2D } from "./ContextGenerator2D.js";
import { DrawerImage2D } from "./DrawerImage2D.js";
import { ICanvas } from "./iCanvas.js";
import sprite from '../sprites.json' assert{"type": "json"};
import { InfoImage } from "./types.js";
import { SpriteManager } from "./SpriteManager.js";
import { ClearerImage2D } from "./ClearerImage2D.js";
import { Util } from "./Util.js"
import { Speaker } from "./Speaker.js";

let datosCanvas: ICanvas = {
    idCanvas: "dibujando",
    type: "2d"
}
let spriteAfor: InfoImage[] = sprite as InfoImage[]
let img: HTMLElement | null = document.getElementById('afor')
let elementoTexto: HTMLElement | null = document.getElementById('texto')
let botonHablar: HTMLElement | null = document.getElementById('hablar')

let contextGenerator2D = new ContextGenerator2D(datosCanvas)
let canvasManager = new CanvasManager(contextGenerator2D)
let context = <CanvasRenderingContext2D>canvasManager.context
let drawer = new DrawerImage2D(context)
let clearer = new ClearerImage2D(context)
let spritemanager = new SpriteManager(spriteAfor)
let lector = new Speaker()

canvasManager.drawImage(drawer, <HTMLImageElement>img,
    spritemanager.getPosition("avatar"))
canvasManager.drawImage(drawer, <HTMLImageElement>img,
    spritemanager.getPosition("m"))

let time = 0
let pause = 75
botonHablar?.addEventListener("click", () => {
    time = 0
    let texto = (<HTMLInputElement>elementoTexto).value;
    lector.speak(texto)
    texto.split("").forEach(character => {
        if (character !== "" && spritemanager.exist(character)) {
            Util.delay(() => {
                canvasManager.clearImage(clearer)
                canvasManager.drawImage(drawer, <HTMLImageElement>img,
                    spritemanager.getPosition("avatar"))
                canvasManager.drawImage(drawer, <HTMLImageElement>img,
                    spritemanager.getPosition(character))
            }, time)
            time += pause
        }
    });
    time += pause
    Util.delay(() => {
        canvasManager.clearImage(clearer)
        canvasManager.drawImage(drawer, <HTMLImageElement>img,
            spritemanager.getPosition("avatar"))
        canvasManager.drawImage(drawer, <HTMLImageElement>img,
            spritemanager.getPosition("m"))
    }, time)
})