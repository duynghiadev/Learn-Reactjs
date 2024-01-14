'use strict';

/**
 * Clase para escribir trazas de log.
 */
class Log {

    constructor() {
    }

    /**
     * Escribe una traza de log
     * @param level nivel de log (CONS.logLevel)
     * @param message mensaje a escribir
     */
    log(level, message) {
        if (level.value < CONFIG.LOGGING_LEVEL.value) return;

        console.log(this._buildMessage(level, message));
    }

    /**
     * Escribe una traza de log a nivel trace
     * @pam message mensaje a escribir
     */
    trace(message) {
        this.log(CONS.logLevel.TRACE, message);
    }

    /**
     * Escribe una traza de log a nivel Debug
     * @pam message mensaje a escribir
     */
    debug(message) {
        this.log(CONS.logLevel.DEBUG, message);
    }

    /**
     * Escribe una traza de log a nivel info
     * @pam message mensaje a escribir
     */
    info(message) {
        this.log(CONS.logLevel.INFO, message);
    }

    /**
     * Escribe una traza de log a nivel warn
     * @pam message mensaje a escribir
     */
    warn(message) {
        this.log(CONS.logLevel.WARN, message);
    }

    /**
     * Escribe una traza de log a nivel warn
     * @pam message mensaje a escribir
     */
    error(message) {
        this.log(CONS.logLevel.ERROR, message);
    }

    /**
     * Escribe una traza de log a nivel warn
     * @pam message mensaje a escribir
     */
    fatal(message) {
        this.log(CONS.logLevel.FATAL, message);
    }

    /**
     * Establece el nivel actual de log
     */
    setLevel(level) {
        CONFIG.LOGGING_LEVEL = level;
    }

    /**
     * Establece el formato del mensaje. Textos que remplaza:
     * - {LEVEL}  nivel de traza
     * - {DATE} fecha
     * - {MESSAGE} mensaje
     */
    setPattern(pattern) {
        CONFIG.LOGGING_LEVEL = level;
    }

    /**
     * Crea el mensaje de log final
     * @param level nivel de log (CONS.logLevel)
     * @param message mensaje a escribir
     */
    _buildMessage(level, message) {
        return CONFIG.LOGGING_PATTERN.replace('{LEVEL}', level.text).replace('{DATE}', new Date().toLocaleString()).replace('{MESSAGE}', message);
    }
}


/**
 * INSTANCIA DEL LOGGER. Es necesario que exista.
 * Se puede sobreescribir esta propiedad para usar un Logger propio.
 */
var LOGGER = new Log();
