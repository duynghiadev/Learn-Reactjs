'use strict';

class Bomb extends AssetActor {
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
