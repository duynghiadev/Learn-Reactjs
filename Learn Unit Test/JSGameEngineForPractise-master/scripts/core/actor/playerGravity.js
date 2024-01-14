'use strict';

/**
 * Clase abstracta que gestiona a un Jugador para escenarios con gravedad.
 */
class PlayerGravity extends Player {
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
     * @param gravity gravedad que aplica al jugador
     * @param jumpPower poder de salto
     * @param gravityDirection dirección de la gravedad
     */
    constructor(context, nlayer, numPlayer, x, y, width, height, collides, spriteData, speed, gravity, jumpPower, gravityDirection) {
        super(context, nlayer, numPlayer, x, y, width, height, collides, spriteData, speed);
        this.gravity = gravity;
        this.gravityDirection = gravityDirection;
        this.jumpPower = jumpPower;
        this.isJumping = false;
        this.currentJumpSpeed = 0;
        this.jumpStartY = -1;
    }

    /**
     * Gestiona las entradas de teclado
     */
    manageInputs() {
        // Gestionamos los inputs de dirección
        let isMoving = false;
        let nSpriteAction = false;

        if (this.getCurrentScenarioDistances().get(CONS.direction.DOWN) > 0) {
            if (!this.isJumping) {
                this.isJumping = true;
                this.jumpStartY = this._y;
                this.currentJumpSpeed = 0;
            }

        } else {
            if (this.isJumping) {
                this.isJumping = false;
                this.currentJumpSpeed = 0;
            }
        }

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

        if (nSpriteAction) {
            this.setSpriteAction(nSpriteAction);
        }

        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerUpInput())) {

            if (!this.isJumping) {
                this.isJumping = true;
                this.currentJumpSpeed = this.jumpPower * -1;
                this.jumpStartY = this._y;
            }

            isMoving = true;
        }


        if (this.isJumping) {
            if (this.currentJumpSpeed > this.jumpPower) {
                this.currentJumpSpeed = this.jumpPower;
            } else if (this.currentJumpSpeed < this.jumpPower * 0.3 && this.currentJumpSpeed > 0) {
                this.currentJumpSpeed = this.jumpPower * 0.3;
            } else {
                this.currentJumpSpeed += this.gravity;
            }

            this.moveY(this.currentJumpSpeed);

            if (this.getCurrentScenarioDistances().get(CONS.direction.UP) <= 0) {
                this.currentJumpSpeed = this.jumpPower * 0.3;
            }
        }

        this.setAnimate(isMoving);
    }

    /**
     * Método que se ejecuta cuando el actor entra en colisión con otro actor
     * @param otherActor el actor con el que se encuentra
     */
    onCollission(otherActor) {
        //TODO sobreescribir
    }
}
