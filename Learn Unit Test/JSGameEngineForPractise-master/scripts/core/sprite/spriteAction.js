'use strict';

/**
 * Clase que define una accion de un sprite, almacenando información de todos sus frames
 */
class SpriteAction {
    /**
     * Constructor
     * @param actionId: id de la acción
     */
    constructor(actionId) {
        this._framesData = [];
        this._action = actionId;
    }

    /**
     * Agrega información de un frame en concreto
     * @param data: información del frame. Debe contener las siguientes 4 propiedades:
     *      -xi: posición x inicial del frame
     *      -xf: posición x final del frame
     *      -yi: posición y inicial del frame
     *      -yf: posición y final del frame
     */
    addFrameData(data) {
        this._framesData.push(data);
    }

    /**
     * Devuelve la información de un frame en concreto
     */
    getFrameData(numFrame) {
        if (numFrame >= this._framesData.length) {
            numFrame = numFrame % this._framesData.length;
        }
        return this._framesData[numFrame];
    }

    getNumFrames() {
        return this._framesData.length;
    }
}
