'use strict';

//CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 800;
CONFIG.SCREEN_HEIGHT = 600;

// Definición de escenario a probar
var SCENDEF = SC_TEST001;


// Variables propias para el ejemplo
// mostrar como multiplayer
var USE_MULTIPLAYER = false;
// Si no se usa multiplayer, margen para el area del juego
var SINGLEPLAYER_MARGIN = 0;

// VELOCIDAD DE LOS JUGADORES
var PLAYER_SPEED = 5;

// POTENCIA DE LA GRAVEDAD
var GRAVITY_POWER = 10;
// GRAVEDAD
var GRAVITY = 0.4;


// Creamos un actor propio
class MyPlayer extends PlayerGravity {
    constructor(context, nlayer, numPlayer, x, y, width, height, collides, spriteData, speed, gravity, jumpPower, gravityDirection) {
        super(context, nlayer, numPlayer, x, y, width, height, collides, spriteData, speed, gravity, jumpPower, gravityDirection);

    }

    playerActEnd() {
        if (this.jumpStartY >= 0 && this.jumpStartY < (this._y - this._h)) {
            //TODO oohhhh, se ha morido
            this._x = this._initialX;
            this._y = this._initialY;
            this.isJumping = false;
            this.jumpStartY = -1;
            this.currentJumpSpeed = 0;
        }
    }
}

class MyRenderingView extends RenderingView {

    editScenarioDrawArea(scenarioDrawArea) {

        if (scenarioDrawArea.y > 0) {
            scenarioDrawArea.y = this._actor._y - this._height + this._actor._h + this._scenario.cellheight;
            scenarioDrawArea.yf = scenarioDrawArea.y + this._width;
        }

        return scenarioDrawArea;
    }


    editActorDrawPositionY(actorDrawY) {
        return this._y + this._height - this._actor._h - this._scenario.cellheight;
    }
}

// Creamos una clase para gestionar el ingame
class TestIngame extends InGame {
    constructor(context) {
        super(context);

        let speed = PLAYER_SPEED;


        // Creamos la definición del escenario
        this._scenarioDefinition = new ScenarioDefinition(SC_TESTJUMP001, CONFIG.SCREEN_WIDTH / 10, 20);


        // Declaramos la posición donde ubicaremos al jugador 1
        let playerPositionx = this._scenarioDefinition.width / 3;
        let playerPositiony = this._scenarioDefinition.height - 60;

        // Creamos a un actor dummy
        let player1 = new MyPlayer(context, 1, 1, playerPositionx, playerPositiony, 32, 32, true, SPRITES[CONS.sprites.PROFESSOR], speed, GRAVITY, GRAVITY_POWER);

        this._actionQuiet = CONS.spriteAction.QUIET_D;

        this.setPlayer1(player1);
        this.setScenarioDefinition(this._scenarioDefinition);


        if (USE_MULTIPLAYER) {
            // Creamos a un segundo actor dummy
            let playerPosition2x = this._scenarioDefinition.width / 2;
            let playerPosition2y = this._scenarioDefinition.height - 60;

            let player2 = new MyPlayer(context, 1, 2, playerPosition2x, playerPosition2y, 32, 32, true, SPRITES[CONS.sprites.GRAYNINJA], speed, GRAVITY, GRAVITY_POWER);

            this.setPlayer2(player2);

            let renderingView1, renderingView2;


            renderingView1 = new MyRenderingView(this, this._scenarioDefinition, player1, 0, 0,
                CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);

            renderingView2 = new RenderingView(this, this._scenarioDefinition, player2, 0, CONFIG.SCREEN_HEIGHT * 0.5,
                CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);


            this._renderingView1Id = this.addRenderingView(renderingView1);
            this._renderingView2Id = this.addRenderingView(renderingView2);

            // Marcamos para dibujar los límites
            renderingView1._drawLimits = true;
            renderingView2._drawLimits = true;

        } else {
            // Creamos el renderizado para el jugador y lo agregamos
            let renderingView1 = new MyRenderingView(this, this._scenarioDefinition, player1, SINGLEPLAYER_MARGIN, SINGLEPLAYER_MARGIN,
                CONFIG.SCREEN_WIDTH - 2 * SINGLEPLAYER_MARGIN, CONFIG.SCREEN_HEIGHT - 2 * SINGLEPLAYER_MARGIN, [player1]);

            this._renderingView1Id = this.addRenderingView(renderingView1);

            // Marcamos para dibujar los límites
            renderingView1._drawLimits = true;
        }


        // Marcamos para dibujar los límites
        this._ctx._drawLimits = true;
    }

    act() {
        super.act();
    }

    draw() {
        super.draw();

    }

    start() {
        super.start();
        LOGGER.debug('start TestIngame');
    }

    pause() {
        super.pause();
        LOGGER.debug('pause TestIngame');
    }

    resume() {
        super.resume();
        LOGGER.debug('resume TestIngame');
    }

    exit() {
        super.exit();
        LOGGER.debug('exit TestIngame');
    }
}


function initPage() {
    // Creamos el juego con 3 capas
    var myGame = new Game(3);
    // Agregamos el statusManager de Pintar las capas
    myGame.registerManagerForStatus(CONS.status.RUNNING, new TestIngame(myGame));

    // Establecemos el status inicial como Ejecutando el juego
    myGame.setCurrentStatus(CONS.status.RUNNING);
    myGame.showFPS(true);
    myGame.start();

    //LOGGER.setLevel(CONS.logLevel.TRACE);
    LOGGER.setLevel(CONS.logLevel.ERROR);
}

window.onload = initPage;
