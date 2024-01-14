'use strict';

class GamePlayer extends Player {
    constructor(context, numPlayer, x, y, width, height, collides, spriteData, speed) {
        super(context, 1, numPlayer, x, y, width, height, collides, spriteData, speed);

        //Control para el tiempo de poder volver a poner una boma
        this._minTimeBetweenBombs = 200;
        this._lastTimeBomb = 0;

        //Control para el tiempo de poder volver a lanzar una bola de energia
        this._minTimeBetweenBullets = 10;
        this._lastTimeBullet = 0;

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

                let bomb = new Bomb(this.getGameContext(), 0, bombx, bomby, myBounds.w, myBounds.h);

                this.getGameContext().getCurrentManager().addActor(bomb);

                this._lastTimeBomb = this.getGameContext().getLastActionTimestamp();
            }
        }

        // Verificamos si lanzar una bola de energia
        // Verificación de tecla
        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerAction02Input())) {
            // Verificación de tiempo
            if (this.getGameContext().getLastActionTimestamp() - this._lastTimeBullet > this._minTimeBetweenBullets) {

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

                let bullet = new Bullet(this.getGameContext(), 2, ballx, bally, myBounds.w, this._direction, 20, true);

                this.getGameContext().getCurrentManager().addActor(bullet);

                this._lastTimeBullet = this.getGameContext().getLastActionTimestamp();
            }
        }

        if (this.getGameContext().getInputManager().isInputActive(this.getPlayerAction03Input())) {
            this.lightRadius += this.lightIncrement;

            if (this.lightRadius > this.lightMaxRadius) {
                this.lightRadius = (CONFIG.FPS / this.lightIncrement) * -1;
            }
        }
    }
}
