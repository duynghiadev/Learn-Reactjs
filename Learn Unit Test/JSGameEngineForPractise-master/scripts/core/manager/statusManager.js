'use strict';

/**
 * Clase base para gestionar un estado del juego (CONS.status).
 * Todas las subclases han de sobreescribir los métodos act, draw, start, pause, resume, exit.
 */
class StatusManager {
    /**
     * @param context instancia de la clase game (contexto del juego)
     */
    constructor(context) {
        this._ctx = context;
    }

    /**
     * Devuelve el contexto del juego
     */
    getGameContext() {
        return this._ctx;
    }

    /**
     * Función principal que se ejecuta periódicamente mientras el manager esté activo. Realiza la lógica del manager.
     */
    act() {
        //TODO sobreescribir
    }

    /**
     * Función principal que se ejecuta periódicamente mientras el manager esté activo. Realiza el redibujado del manager.
     */
    draw() {
        //TODO sobreescribir
    }

    /**
     * Función que se llama la primera vez que se activa el Manager
     */
    start() {
        //TODO sobreescribir
    }

    /**
     * Función que se llama cuando se envía a 2o plano (el estado del manager deja de ser el actual)
     */
    pause() {
        //TODO sobreescribir
    }

    /**
     * Función que se llama cuando se recupera el control (el estado del manager vuelve a ser el actual)
     */
    resume() {
        //TODO sobreescribir
    }

    /**
     * Función que se llama cuando se termina de usar el estado totalmente
     */
    exit() {
        //TODO sobreescribir
    }
}
