'use strict';

class GameSM extends InGame {
    constructor(context, use_multiplayer, multiplayer_vertical, singleplayer_margin, numEnemies) {
        super(context);

        //Definimos si es multijugador o no
        this._useMultiplayer = use_multiplayer;
        this._multiPlayerVertical = multiplayer_vertical;
        this._singlePlayerMargin = singleplayer_margin;
        this._numEnemies = numEnemies;
        this._enemies = false;

        let speed = 5;
        // Creamos la definición del escenario
        this._scenarioDefinition = new ScenarioDefinition(SCENDEF, 62, 62);
        this._scenarioDefinition.id = '1';

        // Creamos definición de escenario del siguiente nivel
        this._scenarioDefinition2 = new ScenarioDefinition(LEVEL2, 62, 62);
        this._scenarioDefinition2.id = '2';

        // Creamos definición de escenario del siguiente nivel
        this._scenarioDefinition3 = new ScenarioDefinition(LEVEL3, 62, 62);
        this._scenarioDefinition3.id = '3';

        // Creamos definición de escenario del siguiente nivel
        this._scenarioDefinition4 = new ScenarioDefinition(LEVEL4, 62, 62);
        this._scenarioDefinition4.id = '4';

        // Creamos definición de escenario del siguiente nivel
        this._scenarioDefinition5 = new ScenarioDefinition(LEVEL5, 62, 62);
        this._scenarioDefinition5.id = '5';

        this._scenadriDefinitionMultiplayer = new ScenarioDefinition(SCENMULTIPLAYER, 62, 62);
        this._scenadriDefinitionMultiplayer.id = '6';

        this.scenarioJumps = new Map();

        //TODO acaba de definir los saltos
        this.scenarioJumps.set('1' + '-' + CONS.direction.UP, this._scenarioDefinition5);
        this.scenarioJumps.set('1' + '-' + CONS.direction.RIGHT, this._scenarioDefinition2);

        this.scenarioJumps.set('2' + '-' + CONS.direction.LEFT, this._scenarioDefinition);
        this.scenarioJumps.set('2' + '-' + CONS.direction.DOWN, this._scenarioDefinition3);

        this.scenarioJumps.set('3' + '-' + CONS.direction.UP, this._scenarioDefinition2);
        this.scenarioJumps.set('3' + '-' + CONS.direction.LEFT, this._scenarioDefinition4);

        this.scenarioJumps.set('4' + '-' + CONS.direction.RIGHT, this._scenarioDefinition3);
        this.scenarioJumps.set('4' + '-' + CONS.direction.LEFT, this._scenarioDefinition5);

        this.scenarioJumps.set('5' + '-' + CONS.direction.RIGHT, this._scenarioDefinition4);
        this.scenarioJumps.set('5' + '-' + CONS.direction.DOWN, this._scenarioDefinition);

        // Declaramos la posición donde ubicaremos al jugador 1
        let playerPositionx = 100;
        let playerPositiony = 100;

        // Creamos a un actor dummy
        let player1 = new GamePlayer(context, 1, playerPositionx, playerPositiony, 32, 32, true, SPRITES[CONS.sprites.PROFESSOR], speed);

        this._actionQuiet = CONS.spriteAction.QUIET_D;

        this.setPlayer1(player1);


        if (this._useMultiplayer) {
            // Creamos a un segundo actor dummy
            let playerPosition2x = 300;
            let playerPosition2y = 100;

            let player2 = new GamePlayer(context, 2, playerPosition2x, playerPosition2y, 32, 32, true, SPRITES[CONS.sprites.GRAYNINJA], speed);
            this.setPlayer2(player2);

            this.setScenarioDefinition(this._scenadriDefinitionMultiplayer);
            let renderingView1, renderingView2;

            if (this._multiPlayerVertical) {
                renderingView1 = new GameRenderingView(this, this._scenadriDefinitionMultiplayer, player1, 0, 0,
                    CONFIG.SCREEN_WIDTH * 0.5, CONFIG.SCREEN_HEIGHT, [player1, player2]);

                renderingView2 = new GameRenderingView(this, this._scenadriDefinitionMultiplayer, player2, CONFIG.SCREEN_WIDTH * 0.5, 0,
                    CONFIG.SCREEN_WIDTH * 0.5, CONFIG.SCREEN_HEIGHT, [player1, player2]);
            } else {
                renderingView1 = new GameRenderingView(this, this._scenadriDefinitionMultiplayer, player1, 0, 0,
                    CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);

                renderingView2 = new GameRenderingView(this, this._scenadriDefinitionMultiplayer, player2, 0, CONFIG.SCREEN_HEIGHT * 0.5,
                    CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);
            }

            this._renderingView1Id = this.addRenderingView(renderingView1);
            this._renderingView2Id = this.addRenderingView(renderingView2);

            // Marcamos para dibujar los límites
            renderingView1._drawLimits = true;
            renderingView2._drawLimits = true;

        } else {
            this.setScenarioDefinition(this._scenarioDefinition);
            this.drawRenderingViewSingle(player1, this._scenarioDefinition);

        }

        // Creamos los enemigos
        this.buildEnemies();

        // Marcamos para dibujar los límites
        this._ctx._drawLimits = true;
    }

    buildEnemies() {
        if (this._enemies) {
            for (let i = 0; i < this._enemies.length; i++) {
                this.removeActor(this._enemies[i]);
            }
        }

        this._enemies = [];

        let freePositions = this.getScenarioDefinition()._def.enemyFreeCells;
        for (let i = 0; i < this._numEnemies; i++) {

            let enemy = new EnemyBear(this._ctx, 1,
                freePositions[i][0] * this.getScenarioDefinition().cellwidth,
                freePositions[i][1] * this.getScenarioDefinition().cellheight, 32, 3);

            this._enemies.push(enemy);
            this.addActor(enemy, true);
        }
    }

    act() {
        super.act();
    }

    draw() {
        super.draw();
        let player1 = this.getPlayer1();
        let currentScenari = this.getScenarioDefinition();

        if (this._useMultiplayer) {
            let player2 = this.getPlayer2();
            let currentScenari2 = this.getScenarioDefinition();
            currentScenari = this.validarPuerta(currentScenari, player1, this._renderingView1Id);
            if (currentScenari != null) {
                this.drawRenderingViewMultiplayer(player1, player1, player2, currentScenari, this._renderingView1Id);
                LOGGER.debug('Cambiamos del jugador 1 nivel');
                this.buildEnemies();
            }
            currentScenari2 = this.validarPuerta(currentScenari2, player2, this._renderingView2Id);
            if (currentScenari2 != null) {
                this.drawRenderingViewMultiplayer(player2, player1, player2, currentScenari2, this._renderingView2Id);
                LOGGER.debug('Cambiamos del jugador 2 nivel');
                this.buildEnemies();
            }
        } else {
            currentScenari = this.validarPuerta(currentScenari, player1, this._renderingView1Id);
            if (currentScenari != null) {
                this.drawRenderingViewSingle(player1, currentScenari);
                this.buildEnemies();
            }
        }
    }

    getNextScenario(currentScenario, direction) {
        return this.scenarioJumps.get(currentScenario + '-' + direction);
    }

    drawRenderingViewSingle(player, currentScenario) {
        // Creamos el renderizado para el jugador y lo agregamos
        let renderingView1 = new GameRenderingView(this, currentScenario, player, this._singlePlayerMargin, this._singlePlayerMargin,
            CONFIG.SCREEN_WIDTH - 2 * this._singlePlayerMargin, CONFIG.SCREEN_HEIGHT - 2 * this._singlePlayerMargin, [player]);

        this._renderingView1Id = this.addRenderingView(renderingView1);

        // Marcamos para dibujar los límites
        renderingView1._drawLimits = true;
    }

    drawRenderingViewMultiplayer(player, player1, player2, currentScenario, renderingViewId) {

        let renderingView;

        if (this._multiPlayerVertical) {
            renderingView = new GameRenderingView(this, currentScenario, player, 0, 0,
                CONFIG.SCREEN_WIDTH * 0.5, CONFIG.SCREEN_HEIGHT, [player1, player2]);
        } else {
            renderingView = new GameRenderingView(this, currentScenario, player, 0, 0,
                CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT * 0.5, [player1, player2]);
        }

        renderingViewId = this.addRenderingView(renderingView);
        // Marcamos para dibujar los límites
        renderingView._drawLimits = true;
    }

    validarPuerta(currentScenari, player, lastRenderingViewId) {
        let newScenari = null;
        // Se controla mediante si el jugador se sale de los margenes del mapa logico del juego
        //Validamos NORTE
        if (0 >= player.getPosition().y) {
            let newScenariDefinition = this.getNextScenario(this.getScenarioDefinition().id, CONS.direction.UP);
            LOGGER.debug('Entramos por la puerta del lado norte');
            //Asignamos nuevo nivel del juego
            this.setScenarioDefinition(newScenariDefinition);
            // Declaramos la posición donde ubicaremos al jugador 1
            //TODO Validar que haya un hueco abajo de todo el territorio
            //TODO de momento no se valida
            player.setPosition(player.getPosition().xb, newScenariDefinition.height - newScenariDefinition.cellheight);
            //Quitamos el antiguo renderingView
            this.removeRenderingView(lastRenderingViewId);
            newScenari = newScenariDefinition;
            LOGGER.debug('Estamos en este nivel de territorio: ' + newScenariDefinition.id);
        }
        //Validamos sur
        else if (currentScenari.height <= player.getPosition().y + player.getDimensions().h) {
            let newScenariDefinition = this.getNextScenario(this.getScenarioDefinition().id, CONS.direction.DOWN);
            LOGGER.debug('Entramos por la puerta del lado sur');
            //Asignamos nuevo nivel del juego
            this.setScenarioDefinition(newScenariDefinition);
            // Declaramos la posición donde ubicaremos al jugador 1
            player.setPosition(player.getPosition().xb, newScenariDefinition.cellheight);
            //Quitamos el antiguo renderingView
            this.removeRenderingView(lastRenderingViewId);
            newScenari = newScenariDefinition;
            LOGGER.debug('Estamos en este nivel de territorio: ' + newScenariDefinition.id);
        }
        //Validamos oeste
        else if (0 >= player.getPosition().x) {
            let newScenariDefinition = this.getNextScenario(this.getScenarioDefinition().id, CONS.direction.LEFT);
            LOGGER.debug('Entramos por la puerta del lado oeste');
            //Asignamos nuevo nivel del juego
            this.setScenarioDefinition(newScenariDefinition);
            // Declaramos la posición donde ubicaremos al jugador 1
            player.setPosition(newScenariDefinition.width - newScenariDefinition.cellwidth, player.getPosition().yb);
            //Quitamos el antiguo renderingView
            this.removeRenderingView(lastRenderingViewId);
            newScenari = newScenariDefinition;
            LOGGER.debug('Estamos en este nivel de territorio: ' + newScenariDefinition.id);
        }
        //Validamos este
        else if (currentScenari.width <= player.getPosition().x + player.getDimensions().w) {
            let newScenariDefinition = this.getNextScenario(this.getScenarioDefinition().id, CONS.direction.RIGHT);
            LOGGER.debug('Entramos por la puerta del lado este');
            //Asignamos nuevo nivel del juego
            this.setScenarioDefinition(newScenariDefinition);
            // Declaramos la posición donde ubicaremos al jugador 1
            player.setPosition(newScenariDefinition.cellwidth, player.getPosition().yb);
            //Quitamos el antiguo renderingView
            this.removeRenderingView(lastRenderingViewId);
            newScenari = newScenariDefinition;
            LOGGER.debug('Estamos en este nivel de territorio: ' + newScenariDefinition.id);

        }
        return newScenari;
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
