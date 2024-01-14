'use strict';

/**
 * Clase padre para los origenes de entradas (inputs) del juego.
 *
 * Todas las subclases deben sobreescribir el metodo "getType", que ha de devolver
 * un valor de CONS.inputType, y opcionalmente el metodo init, que inicializa la clase
 */
class InputSource {
    constructor() {
        this._inited = false;
    }

    _init() {
        this._inited = true;
        this.init();
    }

    init() {

    }

    setManager(manager) {
        this._mng = manager;
    }

    getInputManager() {
        return this._mng;
    }

    /**
     * @return devuelve el tipo de origen (CONS.inputType).
     */
    getType() {
        return CONS.inputType.UNDEFINED;
    }
}
