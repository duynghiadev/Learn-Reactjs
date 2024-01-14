'use strict';

//CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 800;
CONFIG.SCREEN_HEIGHT = 600;

// Definición de escenario a probar
var SCENDEF = SC_TEST001;


// Variables propias para el ejemplo
// mostrar como multiplayer
var USE_MULTIPLAYER = true;
// Si se usa multiplater, si esta se parte verticalmente
var MULTIPLAYER_VERTICAL = true;
// Si no se usa multiplayer, margen para el area del juego
var SINGLEPLAYER_MARGIN = 0;

// VELOCIDAD DE LOS JUGADORES
var PLAYER_SPEED = 5;

// PARA HACER QUE EL JUGADOR 1 LE APLIQUE GRAVEDAD
var USE_GRAVITY_P1 = true;
//PARA HACER QUE EL JUGADOR 1 LE APLIQUE GRAVEDAD
var USE_GRAVITY_P2 = false;
// POTENCIA DE LA GRAVEDAD
var GRAVITY_POWER = 14;
// GRAVEDAD
var GRAVITY = 0.4;

// Creamos una bola de energia! :D
class EnergyBall extends Player {
    constructor(context, nlayer, x, y, width, direction, speed, collides) {
        super(context, nlayer, -1, x + 0.25 * width, y + 0.25 * width, width * 0.5, width * 0.5, true, false, speed);

        this._incrY = 0;
        this._incrX = 0;
        if (direction == CONS.direction.DOWN) {
            this._incrY = speed;
        } else if (direction == CONS.direction.UP) {
            this._incrY = -speed;
        } else if (direction == CONS.direction.LEFT) {
            w;
            this._incrX = -speed;
        } else if (direction == CONS.direction.RIGHT) {
            this._incrX = speed;
        }


    }

    manageInputs() {
        let removeElm = false;
        if (this._incrX != 0) {
            this._x += this._incrX;

            if (this._x < 0 || this._x >= this.getGameContext().getCurrentManager().getScenarioDefinition().width) {
                removeElm = true;
            }

        }
        if (this._incrY != 0) {
            this._y += this._incrY;

            if (this._y < 0 || this._y >= this.getGameContext().getCurrentManager().getScenarioDefinition().height) {
                removeElm = true;
            }

        }

        if (removeElm) {
            this.getGameContext().getCurrentManager().removeActor(this);
        }
    }


    draw(ctx, x, y, w, h, drawLimits) {
        ctx = ctx ? ctx : this._layer;
        ctx.beginPath();
        ctx.arc(x, y, this._w, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    }
}

// Creamos una Bomba
class TheBomb extends AssetActor {
    constructor(context, nlayer, x, y, width, explotes) {
        super(context, nlayer, x, y, width, width * 2, false, SPRITES[CONS.sprites.BOMB]);
        this._explotes = explotes;
        if (this._explotes) {
            this.setSpriteAction(CONS.spriteAction.WAITING_EXPLOTE);
            // Estado 0, encendiendo la mecha!
            this._status = 0;

            // Guardamos los frames necesarios para que llegue a explotar
            this._numFramesForExplote = this._spriteData.getActionData(this._currentSpriteAction).getNumFrames();

        } else {
            this.setSpriteAction(CONS.spriteAction.QUIET);
            // Estado -1, bomba quieta
            this._status = 0;
        }
    }

    act() {
        super.act();
        // Si el estado es bomba quieta
        if (this._status == 0) {
            // Si ha llegado al último frame, se cambia el estado y la animación
            if (this._currentSpriteFrame >= this._numFramesForExplote - 1) {
                this._status = 1;
                this.setSpriteAction(CONS.spriteAction.EXPLOTE_001);
                this._numFramesForExplote = this._spriteData.getActionData(this._currentSpriteAction).getNumFrames();
            }


        } else if (this._status == 1) { // Si el estado es mostrando explosión
            // Si ha llegado al último frame, se cambia el estado y la animación
            if (this._currentSpriteFrame >= this._numFramesForExplote - 1) {
                //TODO aquí debería eliminarse el actor, pero para la prueba, se resetea
//                this.setSpriteAction(CONS.spriteAction.WAITING_EXPLOTE);
//                this._status = 0;
//                this._numFramesForExplote = this._spriteData.getActionData(this._currentSpriteAction).getNumFrames();
                this.getGameContext().getCurrentManager().removeActor(this);
            }
        }

    }
}

// Creamos un actor propio
class MyPlayer extends Player {
    constructor(context, numPlayer, x, y, width, height, collides, spriteData, speed) {
        super(context, 1, numPlayer, x, y, width, height, collides, spriteData, speed);

        //Control para el tiempo de poder volver a poner una boma
        this._minTimeBetweenBombs = 200;
        this._lastTimeBomb = 0;

        //Control para el tiempo de poder volver a lanzar una bola de energia
        this._minTimeBetweenEnergyBalls = 10;
        this._lastTimeEnergyBall = 0;

        this.lightIncrement = 5;
        this.lightMaxRadius = 200;
        this.lightRadius = (CONFIG.FPS / this.lightIncrement) * -1;
    }

    onCollission(otherActor) {
    }

    playerActInit() {
        return true;
    }

    playerActEnd() {
        // Verificamos si poner una bomba
        // Verificación de tecla
        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerAction01Input())) {
            // Verificación de tiempo
            if (this.getGameContext().getLastActionTimestamp() - this._lastTimeBomb > this._minTimeBetweenBombs) {

                let myBounds = this.getBounds();

                // Determinamos la ubicación de la bomba
                let bombx = myBounds.x;
                let bomby = myBounds.y;

                if (this._direction == CONS.direction.UP) {
                    bomby -= myBounds.h * 2;
                } else if (this._direction == CONS.direction.LEFT) {
                    bomby -= myBounds.h;
                    bombx -= myBounds.w;
                } else if (this._direction == CONS.direction.RIGHT) {
                    bomby -= myBounds.h;
                    bombx += myBounds.w;
                }

                let bomb = new TheBomb(this.getGameContext(), 0, bombx, bomby, myBounds.w, myBounds.h);

                this.getGameContext().getCurrentManager().addActor(bomb);

                this._lastTimeBomb = this.getGameContext().getLastActionTimestamp();
            }
        }

        // Verificamos si lanzar una bola de energia
        // Verificación de tecla
        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerAction02Input())) {
            // Verificación de tiempo
            if (this.getGameContext().getLastActionTimestamp() - this._lastTimeEnergyBall > this._minTimeBetweenEnergyBalls) {

                let myBounds = this.getBounds();

                //hay que determinar hacia donde va la bola de energia y su ubicación
                let ballx = myBounds.x;
                let bally = myBounds.y;

                if (this._direction == CONS.direction.DOWN) {
                    bally += myBounds.h;
                } else if (this._direction == CONS.direction.UP) {
                    bally -= myBounds.h;
                } else if (this._direction == CONS.direction.LEFT) {
                    ballx -= myBounds.w;
                } else if (this._direction == CONS.direction.RIGHT) {
                    ballx += myBounds.w;
                }

                let energyBall = new EnergyBall(this.getGameContext(), 2, ballx, bally, myBounds.w, this._direction, 20, true);

                this.getGameContext().getCurrentManager().addActor(energyBall);

                this._lastTimeEnergyBall = this.getGameContext().getLastActionTimestamp();
            }
        }

        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerAction03Input())) {
            this.lightRadius += this.lightIncrement;

            if (this.lightRadius > this.lightMaxRadius) {
                this.lightRadius = (CONFIG.FPS / this.lightIncrement) * -1;
            }
        }
    }

    onCollission(otherActor) {
    }
}


// Creamos una clase que sobreescribe el renderingView
class MyRenderingView extends RenderingView {
    constructor(statusManager, scenarioDefinition, actor, x, y, width, height, drawableActors) {
        super(statusManager, scenarioDefinition, actor, x, y, width, height, drawableActors);
        this._lastLightRadius = this._actor.lightRadius;
        this._lastActorDrawx = -1;
        this._lastActorDrawy = -1;
        this._lightImage = false;
    }

    onPostDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea) {
        if (this._actor.lightRadius > 0) {

            if (this._lightImage == false || this._lastLightRadius != this._actor.lightRadius || this._lastActorDrawx != actorDrawPosx || this._lastActorDrawy != actorDrawPosy) {
                this._lastLightRadius = this._actor.lightRadius;
                this._lastActorDrawx = actorDrawPosx;
                this._lastActorDrawy = actorDrawPosy;
                this.buildLightRadiusImage();
            }


            let ctxDark = this._manager.getGameContext().getMostFrontLayer();

            ctxDark.drawImage(this._lightImage, this._x, this._y);
        }
    }

    buildLightRadiusImage() {
        this._lightImage = document.createElement('canvas');
        this._lightImage.width = this._width;
        this._lightImage.height = this._height;
        let lightCtx = this._lightImage.getContext('2d');

        lightCtx.fillStyle = 'black';

        lightCtx.fillRect(0, 0, this._lightImage.width, this._lightImage.height);
        lightCtx.globalCompositeOperation = 'xor';
        lightCtx.arc(this._lastActorDrawx - this._x + 0.5 * this._actor._w, this._lastActorDrawy - this._y + 0.5 * this._actor._h, this._lastLightRadius, 0, 2 * Math.PI);
        lightCtx.fill();
    }
}

// Creamos una clase para gestionar el ingame
class TestIngame extends InGame {
    constructor(context) {
        super(context);

        let speed = PLAYER_SPEED;

        // Creamos la definición del escenario
        this._scenarioDefinition = new ScenarioDefinition(SCENDEF, 62, 62);


        // Declaramos la posición donde ubicaremos al jugador 1
        let playerPositionx = 100;
        let playerPositiony = this._scenarioDefinition.height - 150;

        // Creamos a un actor dummy
        let player1 = new MyPlayer(context, 1, playerPositionx, playerPositiony, 32, 32, true, SPRITES[CONS.sprites.PROFESSOR], speed);

        if (USE_GRAVITY_P1) {
            player1 = new PlayerGravity(context, 1, 1, playerPositionx, playerPositiony, 32, 32, true, SPRITES[CONS.sprites.PROFESSOR], speed, GRAVITY, GRAVITY_POWER);
        }

        this._actionQuiet = CONS.spriteAction.QUIET_D;

        this.setPlayer1(player1);
        this.setScenarioDefinition(this._scenarioDefinition);


        if (USE_MULTIPLAYER) {
            // Creamos a un segundo actor dummy
            let playerPosition2x = 300;
            let playerPosition2y = this._scenarioDefinition.height - 150;

            let player2 = new MyPlayer(context, 2, playerPosition2x, playerPosition2y, 32, 32, true, SPRITES[CONS.sprites.GRAYNINJA], speed);

            if (USE_GRAVITY_P2) {
                player2 = new PlayerGravity(context, 1, 2, playerPosition2x, playerPosition2y, 32, 32, true, SPRITES[CONS.sprites.GRAYNINJA], speed, GRAVITY, GRAVITY_POWER);
            }

            this.setPlayer2(player2);

            let renderingView1, renderingView2;

            if (MULTIPLAYER_VERTICAL) {
                renderingView1 = new MyRenderingView(this, this._scenarioDefinition, player1, 0, 0,
                    CONFIG.SCREEN_WIDTH * 0.5, CONFIG.SCREEN_HEIGHT, [player1, player2]);

                renderingView2 = new MyRenderingView(this, this._scenarioDefinition, player2, CONFIG.SCREEN_WIDTH * 0.5, 0,
                    CONFIG.SCREEN_WIDTH * 0.5, CONFIG.SCREEN_HEIGHT, [player1, player2]);
            } else {
                renderingView1 = new MyRenderingView(this, this._scenarioDefinition, player1, 0, 0,
                    CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);

                renderingView2 = new MyRenderingView(this, this._scenarioDefinition, player2, 0, CONFIG.SCREEN_HEIGHT * 0.5,
                    CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);
            }

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
