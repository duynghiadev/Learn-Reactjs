'use strict';

// CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 1000;
CONFIG.SCREEN_HEIGHT = 500;

// CONFIGURAMOS EL MENÚ

var mainMenuConfig = {
    items: [
        {label: 'Prueba con las capas', key: CONS.input.ACTION_01, newStatus: CONS.status.CUSTOM_001},
        {label: 'Submenu 1', newStatus: CONS.status.CUSTOM_MENU_01},
        {label: 'Game', newStatus: CONS.status.RUNNING},
        {label: 'Test 3'},
        {label: 'Test 4'}

    ],
    itemHeight: 0.08,
    itemSeparation: 0.05,
    itemYini: 0.2,
    itemX: 0.03,
    labelColor: 'green',
    bkgImageUrl: 'img/bkg1.png',
    labelBkgImageUrl: 'img/imagebkglabel.png',
    labelBkgImageOpacity: 0.4

};


var subMenuConfig = {
    items: [
        {label: 'Volver al menu principal', newStatus: CONS.status.MENU},
        {label: 'Realizar las pruebas con capas', newStatus: CONS.status.CUSTOM_001}
    ],
    itemHeight: 0.2,
    itemSeparation: 0.2,
    itemYini: 0.3,
    bkgColor: 'skyblue'
};

/**
 * Clase que pinta en todas las capas del juego
 */
class PaintAllLayersManager extends StatusManager {
    constructor(context) {
        super(context);
    }

    act() {
        if (this.getGameContext().getInputManager().isInputActive(CONS.input.CANCEL)) {
            LOGGER.debug('going back to the menu');
            return this.getGameContext().setCurrentStatus(CONS.status.MENU);
        }
    }

    draw() {
        for (let i = 0; i < this.getGameContext().getLayerCount(); i++) {
            let ctx = this.getGameContext().getLayer(i);
            let fontSize = (200 - (i * 20));
            ctx.font = fontSize + "px Arial";
            ctx.fillStyle = `rgb(${fontSize},${fontSize},${fontSize})`;
            ctx.fillText(i, fontSize, fontSize);
        }

    }

    start() {
        LOGGER.debug('start PaintAllLayersManager');
    }

    pause() {
        LOGGER.debug('pause PaintAllLayersManager');
    }

    resume() {
        LOGGER.debug('resume PaintAllLayersManager');
    }

    exit() {
        LOGGER.debug('exit PaintAllLayersManager');
    }
}

function initPage() {
    // Creamos el juego con 4 capas
    var myGame = new Game(5);
    // Agregamos el statusManager de Pintar las capas
    myGame.registerManagerForStatus(CONS.status.CUSTOM_001, new PaintAllLayersManager(myGame));
    // Agregamos el statusManager del Menu
    myGame.registerManagerForStatus(CONS.status.MENU, new Menu(myGame, mainMenuConfig));
    // Agregamos el statusManager del Submenu
    myGame.registerManagerForStatus(CONS.status.CUSTOM_MENU_01, new Menu(myGame, subMenuConfig));


    myGame.registerManagerForStatus(CONS.status.RUNNING, new TestIngame1(myGame));

    // Establecemos el status inicial como el Menu
    myGame.setCurrentStatus(CONS.status.MENU);

    myGame.start();
    myGame.showFPS(true);


}

window.onload = initPage;
