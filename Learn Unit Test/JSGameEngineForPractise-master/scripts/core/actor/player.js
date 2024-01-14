'use strict';

/**
 * Clase abstracta que gestiona a un Jugador.
 *
 * Al final de la clase se detallan los métodos a sobreescribir para implementar la lógica del jugador.
 * Si se sobreescribe cualquier otro método, se debe llamar siempre al método padre, o replicar el código para no romper su funcionamiento.
 */
class Player extends AssetActor {
    /**
     * Constructor
     * @param context contexto del juego
     * @param nlayer numero de capa donde el personaje se dibuja por defecto
     * @param numPlayer número de jugador, del 1 al N.
     * @param x posicion x inicial del actor
     * @param y posicion y inicial del actor
     * @param width ancho del actor
     * @param height alto del actor
     * @param collides indica si es un actor físico (colisiona con otros) o no
     * @param spriteData objeto spriteData que contiene el sprite del Actor
     * @speed speed velocidad de movimiento del jugador
     */
    constructor(context, nlayer, numPlayer, x, y, width, height, collides, spriteData, speed) {
        super(context, nlayer, x, y, width, height, collides, spriteData);
        this._numPlayer = numPlayer;
        this._actionQuiet = CONS.spriteAction.QUIET_D;
        this._direction = CONS.direction.DOWN;
        this._speed = speed;

        this._spriteActionUp = CONS.spriteAction.MOVE_U;
        this._spriteActionDown = CONS.spriteAction.MOVE_D;
        this._spriteActionLeft = CONS.spriteAction.MOVE_L;
        this._spriteActionRight = CONS.spriteAction.MOVE_R;
    }

    act() {
        if (!this.playerActInit()) return;

        super.act();

        this.manageInputs();

        this.playerActEnd();
    }

    /**
     * Mueve el jugador en el eje x
     */
    moveX(increment) {
        if (increment > 0) {
            let distance = this.getCurrentScenarioDistances().get(CONS.direction.RIGHT);

            if (distance < 0) {
                increment = 0;
            } else {
                increment = Math.max(Math.min(distance, increment), 0);
            }

            super.moveX(increment);

        } else if (increment < 0) {
            let distance = this.getCurrentScenarioDistances().get(CONS.direction.LEFT);

            if (distance < 0) {
                increment = 0;
            } else {
                distance = distance * -1;

                increment = Math.max(distance, increment);
            }

            super.moveX(increment);

        }
    }

    /**
     * Mueve el jugador en el eje y
     */
    moveY(increment) {
        if (increment > 0) {
            let distance = this.getCurrentScenarioDistances().get(CONS.direction.DOWN);

            if (distance < 0) {
                increment = 0;
            } else {
                increment = Math.max(Math.min(distance, increment), 0);
            }

            super.moveY(increment);
        } else if (increment < 0) {
            let distance = this.getCurrentScenarioDistances().get(CONS.direction.UP);

            if (distance < 0) {
                increment = 0;
            } else {
                distance = distance * -1;

                increment = Math.max(distance, increment);
            }

            super.moveY(increment);
        }
    }

    /**
     * @return número de jugador
     */
    getNumPlayer() {
        return this._numPlayer;
    }

    /**
     * @return velocidad del jugador
     */
    getSpeed() {
        return this._speed;
    }

    /**
     * Establece la velocidad del jugador
     * @param speed velocidad
     */
    setSpeed(speed) {
        this._speed = speed;
    }

    setAnimate(animate) {
        super.setAnimate(animate);

        if (animate == false) {
            this.setSpriteAction(this._actionQuiet);
        }
    }

    /**
     * Gestiona las entradas de teclado
     */
    manageInputs() {
        // Gestionamos los inputs de dirección
        let isMoving = false;
        let nSpriteAction = false;

        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerLeftInput())) {
            // Movemos a la izquierda
            this.moveX(this._speed * -1);

            nSpriteAction = this.getSpriteActionLeft();
            this._actionQuiet = CONS.spriteAction.QUIET_L;
            this._direction = CONS.direction.LEFT;

            isMoving = true;
        } else if (this.getGameContext().getInputManager().isInputActive(this.getPlayerRightInput())) {
            this.moveX(this._speed);

            nSpriteAction = this.getSpriteActionRight();
            this._actionQuiet = CONS.spriteAction.QUIET_R;
            this._direction = CONS.direction.RIGHT;

            isMoving = true;
        }

        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerUpInput())) {
            this.moveY(this._speed * -1);

            if (nSpriteAction === false) {
                nSpriteAction = this.getSpriteActionUp();
            }

            this._actionQuiet = CONS.spriteAction.QUIET_U;
            this._direction = CONS.direction.UP;

            isMoving = true;
        } else if (this.getGameContext().getInputManager().isInputActive(this.getPlayerDownInput())) {
            this.moveY(this._speed);

            if (nSpriteAction === false) {
                nSpriteAction = this.getSpriteActionDown();
            }

            this._actionQuiet = CONS.spriteAction.QUIET_D;
            this._direction = CONS.direction.DOWN;

            isMoving = true;
        }

        if (nSpriteAction) {
            this.setSpriteAction(nSpriteAction);
        }

        this.setAnimate(isMoving);
    }

    /**
     * @return CONS.input para ir hacia arriba
     */
    getPlayerUpInput() {
        return eval('CONS.input.P' + this._numPlayer + '_UP');
    }

    /**
     * @return CONS.input para ir hacia abajo
     */
    getPlayerDownInput() {
        return eval('CONS.input.P' + this._numPlayer + '_DOWN');
    }

    /**
     * @return CONS.input para ir hacia izquierda
     */
    getPlayerLeftInput() {
        return eval('CONS.input.P' + this._numPlayer + '_LEFT');
    }

    /**
     * @return CONS.input para ir hacia derecha
     */
    getPlayerRightInput() {
        return eval('CONS.input.P' + this._numPlayer + '_RIGHT');
    }

    getPlayerAction01Input() {
        return eval('CONS.input.P' + this._numPlayer + '_ACTION_01');
    }

    getPlayerAction02Input() {
        return eval('CONS.input.P' + this._numPlayer + '_ACTION_02');
    }

    getPlayerAction03Input() {
        return eval('CONS.input.P' + this._numPlayer + '_ACTION_03');
    }

    /**
     * @return acción actual para ir hacia arriba (CONS.spriteAction)
     */
    getSpriteActionUp() {
        return this._spriteActionUp;
    }

    /**
     * Establece la acción para ir hacia arriba  (CONS.spriteAction)
     */
    setSpriteActionUp(action) {
        this._spriteActionUp = action;
    }

    /**
     * @return acción actual para ir hacia abajo (CONS.spriteAction)
     */
    getSpriteActionDown() {
        return this._spriteActionDown;
    }

    /**
     * Establece la acción para ir hacia abajo  (CONS.spriteAction)
     */
    setSpriteActionDown(action) {
        this._spriteActionDown = action;
    }

    /**
     * @return acción actual para ir hacia la izquierda (CONS.spriteAction)
     */
    getSpriteActionLeft() {
        return this._spriteActionLeft;
    }

    /**
     * Establece la acción para ir hacia la izquierda  (CONS.spriteAction)
     */
    setSpriteActionLeft(action) {
        this._spriteActionLeft = action;
    }

    /**
     * @return acción actual para ir hacia la derecha (CONS.spriteAction)
     */
    getSpriteActionRight() {
        return this._spriteActionRight;
    }

    /**
     * Establece la acción para ir hacia la derecha  (CONS.spriteAction)
     */
    setSpriteActionRight(action) {
        this._spriteActionRight = action;
    }

    /**
     * Método que se llama al inicio de act(). Es para realizar acciones iniciales personalizadas.
     * El valor de retorno de este método determina si se siguen ejecutando las acciones por defecto del jugador (true) o se omiten (false).
     * Las acciones por defecto del jugador incluyen, entre otros, la detección de colisiones con el escenario.
     * @return boolean
     */
    playerActInit() {
        //TODO sobreescribir
        return true;
    }

    /**
     * Método que se llama al final de act(). Es para realizar acciones finales personalizadas.
     */
    playerActEnd() {
        //TODO sobreescribir
    }

    /**
     * Método que se ejecuta cuando el actor entra en colisión con otro actor
     * @param otherActor el actor con el que se encuentra
     */
    onCollission(otherActor) {
        //TODO sobreescribir
    }
}
