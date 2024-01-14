'use strict';

class GameRenderingView extends RenderingView {
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
