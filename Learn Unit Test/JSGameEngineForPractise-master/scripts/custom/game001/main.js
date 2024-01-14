'use strict';

//CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 1000;
CONFIG.SCREEN_HEIGHT = 600;

// Definición de escenario a probar
var SCENDEF = SC_TEST001;
var LEVEL2 = SC_TEST002;
var LEVEL3 = SC_TEST003;
var LEVEL4 = SC_TEST004;
var LEVEL5 = SC_TEST005;
var SCENMULTIPLAYER = SC_TESTMULTIPLAYER;

// Variables propias para el ejemplo
// mostrar como multiplayer
//var USE_MULTIPLAYER = false;
// Si se usa multiplater, si esta se parte verticalmente
//var MULTIPLAYER_VERTICAL = false;
// Si no se usa multiplayer, margen para el area del juego
//var SINGLEPLAYER_MARGIN = 0;


function initPage() {
    // Creamos el juego con 5 capas
    var myGame = new Game(5);
    // Creamos el menu principal
    myGame.registerManagerForStatus(CONS.status.MENU, new Menu(myGame, mainMenuConfig));

    // Agregamos el juego que es singleplayer
    myGame.registerManagerForStatus(CONS.status.GAME_SINGLE, new GameSM(myGame, false, false, 0, 2));
    myGame.registerManagerForStatus(CONS.status.GAME_MULTI, new GameSM(myGame, true, true, 0, 2));
    // Establecemos el status inicial como Ejecutando el juego
    myGame.setCurrentStatus(CONS.status.MENU);
    myGame.showFPS(true);

    myGame.start();
}

window.onload = initPage;
