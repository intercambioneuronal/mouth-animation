import { CanvasManager } from "./CanvasManager.js";
import { ContextGenerator2D } from "./ContextGenerator2D.js";
import { DrawerImage2D } from "./DrawerImage2D.js";
import sprite from '../sprites.json' assert { "type": "json" };
import { SpriteManager } from "./SpriteManager.js";
import { ClearerImage2D } from "./ClearerImage2D.js";
import { Util } from "./Util.js";
import { Speaker } from "./Speaker.js";
let datosCanvas = {
    idCanvas: "dibujando",
    type: "2d"
};
let spriteAfor = sprite;
let img = document.getElementById('afor');
let elementoTexto = document.getElementById('texto');
let botonHablar = document.getElementById('hablar');
let contextGenerator2D = new ContextGenerator2D(datosCanvas);
let canvasManager = new CanvasManager(contextGenerator2D);
let context = canvasManager.context;
let drawer = new DrawerImage2D(context);
let clearer = new ClearerImage2D(context);
let spritemanager = new SpriteManager(spriteAfor);
let lector = new Speaker();
canvasManager.drawImage(drawer, img, spritemanager.getPosition("avatar"));
canvasManager.drawImage(drawer, img, spritemanager.getPosition("m"));
let time = 0;
let pause = 75;
botonHablar?.addEventListener("click", () => {
    time = 0;
    let texto = elementoTexto.value;
    lector.speak(texto);
    texto.split("").forEach(character => {
        if (character !== "" && spritemanager.exist(character)) {
            Util.delay(() => {
                canvasManager.clearImage(clearer);
                canvasManager.drawImage(drawer, img, spritemanager.getPosition("avatar"));
                canvasManager.drawImage(drawer, img, spritemanager.getPosition(character));
            }, time);
            time += pause;
        }
    });
    time += pause;
    Util.delay(() => {
        canvasManager.clearImage(clearer);
        canvasManager.drawImage(drawer, img, spritemanager.getPosition("avatar"));
        canvasManager.drawImage(drawer, img, spritemanager.getPosition("m"));
    }, time);
});
