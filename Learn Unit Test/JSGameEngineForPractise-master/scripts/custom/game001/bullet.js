'use strict';

class Bullet extends Player {
    constructor(context, nlayer, x, y, width, direction, speed, collides) {
        super(context, nlayer, -1, x + 0.25 * width, y + 0.25 * width, width * 0.5, width * 0.5, true, false, speed);

        this._incrY = 0;
        this._incrX = 0;
        if (direction == CONS.direction.DOWN) {
            this._incrY = speed;
        } else if (direction == CONS.direction.UP) {
            this._incrY = -speed;
        } else if (direction == CONS.direction.LEFT) {
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
