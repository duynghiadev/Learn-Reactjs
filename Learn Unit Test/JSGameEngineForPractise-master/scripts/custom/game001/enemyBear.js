'use strict';

class EnemyBear extends Player {
    constructor(context, nlayer, x, y, width, speed) {
        super(context, nlayer, -1, x, y, width, width, true, SPRITES[CONS.sprites.RAICHU], speed);
        LOGGER.debug(`Oso ubicado en posicion ${x},${y}`);
    }

    manageInputs() {
        // Determinamos a qué jugador seguir
        let victim = this.getClosestPlayer();

        let nSpriteAction = false;
        let isMoving = false;

        let overrideSpeed = false;

        let moveH = Math.abs(victim._x - this._x) > this._wh;
        let moveV = Math.abs(victim._y - this._y) > this._hh;

        if (moveH && moveV) {

            if (Math.abs(victim._x - this._x) > Math.abs(victim._y - this._y)) {
                moveV = false;
            } else {
                moveH = false;
            }
        }

        if (moveH) {
            if ((victim._x - this._x > 0 && this.getCurrentScenarioDistances().get(CONS.direction.RIGHT) <= 0) ||
                (victim._x - this._x < 0 && this.getCurrentScenarioDistances().get(CONS.direction.LEFT) <= 0)) {
                moveH = false;
                moveV = true;
                overrideSpeed = this._speed;

                if (this.getCurrentScenarioDistances().get(CONS.direction.UP) < this.getCurrentScenarioDistances().get(CONS.direction.DOWN)) {
                    overrideSpeed = overrideSpeed * -1;
                }
            }
        } else if (moveV) {
            if ((victim._y - this._y > 0 && this.getCurrentScenarioDistances().get(CONS.direction.DOWN) <= 0) ||
                (victim._y - this._y < 0 && this.getCurrentScenarioDistances().get(CONS.direction.UP) <= 0)) {
                moveV = false;
                moveH = true;
                overrideSpeed = this._speed;

                if (this.getCurrentScenarioDistances().get(CONS.direction.LEFT) < this.getCurrentScenarioDistances().get(CONS.direction.RIGHT)) {
                    overrideSpeed = overrideSpeed * -1;
                }
            }

        }

        if (moveH) {
            if (victim._x < this._x) {
                this.moveX(overrideSpeed ? overrideSpeed : this._speed * -1);

                nSpriteAction = CONS.spriteAction.MOVE_L;
                this._actionQuiet = CONS.spriteAction.QUIET_L;
                this._direction = CONS.direction.LEFT;
            } else {
                this.moveX(overrideSpeed ? overrideSpeed : this._speed);

                nSpriteAction = CONS.spriteAction.MOVE_R;
                this._actionQuiet = CONS.spriteAction.QUIET_R;
                this._direction = CONS.direction.RIGHT;
            }
            isMoving = true;

        } else if (moveV) {
            if (victim._y < this._y) {
                this.moveY(overrideSpeed ? overrideSpeed : this._speed * -1);

                nSpriteAction = CONS.spriteAction.MOVE_U;
                this._actionQuiet = CONS.spriteAction.QUIET_U;
                this._direction = CONS.direction.UP;
            } else {
                this.moveY(overrideSpeed ? overrideSpeed : this._speed);

                nSpriteAction = CONS.spriteAction.MOVE_D;
                this._actionQuiet = CONS.spriteAction.QUIET_D;
                this._direction = CONS.direction.DOWN;
            }

            isMoving = true;
        }

        if (nSpriteAction) {
            this.setSpriteAction(nSpriteAction);
        }

        this.setAnimate(isMoving);
    }

    getClosestPlayer() {
        let players = this._ctx.getCurrentManager()._players;

        let closestPlayer = players[0];

        let closestPlayerDifference = Math.abs(Math.abs(closestPlayer._y - this._y) + Math.abs(closestPlayer._x - this._x));
        for (let i = 1; i < players.length; i++) {
            let nDifference = Math.abs(Math.abs(players[i]._y - this._y) + Math.abs(players[i]._x - this._x));

            if (nDifference < closestPlayerDifference) {
                closestPlayerDifference = nDifference;
                closestPlayer = players[i];
            }
        }

        return closestPlayer;
    }
}
