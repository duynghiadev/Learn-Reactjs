'use strict';

/**
 * Clase gestora para las entradas del juego.
 */
class InputManager {
    /**
     * Constructor
     * @param inputSource clase gestora del origen de la entrada (subclase de inputSource)
     */
    constructor() {
        this.inputs = new Map();
        this._srcs = new Map();
        this._inputOnListeners = new Map();
        this._inputOffListeners = new Map();

        for (let i = 0; i < CONFIG.INPUT_TYPES.length; i++) {
            this._addInputSourceByType(CONFIG.INPUT_TYPES[i]);
        }
    }

    /**
     * Agrega un gestor de entrada por su tipo (solo los definidos en el core)
     */
    _addInputSourceByType(type) {
        switch (type) {
            case CONS.inputType.KEYBOARD:
                this.addInputSource(new KeyboardSource(this));
                break;
        }
    }

    /**
     * Agrega un nuevo gestor de entrada
     * @param inputSource clase gestora del origen de la entrada (subclase de inputSource)
     */
    addInputSource(inputSource) {
        if (this._srcs.has(inputSource.getType())) return;

        inputSource.setManager(this);

        if (inputSource._inited === false) {
            inputSource._init();
        }

        this._srcs.set(inputSource.getType(), inputSource);
        LOGGER.info("Added input source type " + inputSource.getType());
    }

    /**
     * Activa una entrada.
     * @param input entrada (CONS.input).
     * @param intensity intensidad de la entrada (valores del 0 al 1)
     */
    inputOn(input, intensity) {
        if (intensity === this.inputs.get(input)) return;
        this.inputs.set(input, intensity);

        let inputIt;

        if (intensity == 0) {
            inputIt = this._inputOffListeners.values();
        } else {
            inputIt = this._inputOnListeners.values();
        }

        let inputElm = inputIt.next();

        while (!inputElm.done) {
            inputElm.value(input, intensity);

            inputElm = inputIt.next();
        }

        LOGGER.trace(`input ${input} on at intensity ${intensity}`);
    }

    /**
     * Desactiva una entrada.
     * @param input entrada (CONS.input).
     */
    inputOff(input) {
        this.inputOn(input, 0);
    }

    /**
     * Verifica si una entrada está activa
     * @param input entrada a verificar
     * @return true si está activa, de lo contrario, false
     */
    isInputActive(input) {
        if (!this.inputs.has(input)) {
            this.inputOff(input);
            return false;
        } else {
            return this.inputs.get(input) > 0.0;
        }
    }

    /**
     * Verifica si una entrada está activa, devolviendo la intensidad
     * @param input entrada a verificar
     * @return numero del 0 al 1 según la intensidad de la entrada (si está desactivada, devolverá 0)
     */
    getInput(input) {
        if (!this.inputs.has(input)) {
            this.inputOff(input);
            return 0;
        } else {
            return this.inputs.get(input);
        }
    }

    /**
     * Agrega un evento al accionarse una entrada
     * @param event función a ejecutar. Recibe como parámetro la entrada (CONS.input)
     * @return id del evento.
     */
    addInputOnListener(event) {
        let id = Utils.generateUUID();
        this._inputOnListeners.set(id, event);
        return id;
    }

    /**
     * Elimina un evento al accionarse una entrada
     * @param idListener identificador del evento (para luego poder ser desasignado)
     */
    removeInputOnListener(idListener) {
        this._inputOnListeners.delete(idListener);
    }

    /**
     * Agrega un evento al dejar de accionarse una entrada
     * @param event función a ejecutar. Recibe como parámetro la entrada (CONS.input)
     * @return id del evento.
     */
    addInputOffListener(event) {
        let id = Utils.generateUUID();
        this._inputOffListeners.set(id, event);
        return id;
    }

    /**
     * Elimina un evento al dejar de accionarse una entrada
     * @param idListener identificador del evento (para luego poder ser desasignado)
     */
    removeInputOffListener(idListener) {
        this._inputOffListeners.delete(idListener);
    }
}
