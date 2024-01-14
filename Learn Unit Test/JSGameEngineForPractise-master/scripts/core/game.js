'use strict';

/**
 * Clase principal que gestiona todo el juego.
 */
class Game {
    /**
     * Constructor del juego
     * @param layers cantidad de capas de dibujado que tendrá el juego
     */
    constructor(layers) {
        this._statusData = new Map();

        this._status = -1;
        this._prevStatus = -1;

        this._inputManager = new InputManager();

        this._layers = [];
        this._lastRedraw = new Date().getTime();
        this._showFPS = false;
        this._metadataLayer = false;

        this._lastActionTime = new Date().getTime();

        let divMain = document.createElement("div");
        divMain.style.position = "relative";

        for (let i = 0; i < layers; i++) {
            let canvas = document.createElement("canvas");
            canvas.id = `layer_${i}`;
            canvas.style.position = "absolute";
            canvas.style.left = "0px";
            canvas.style.top = "0px";
            canvas.style.zIndex = i;
            canvas.width = CONFIG.SCREEN_WIDTH;
            canvas.height = CONFIG.SCREEN_HEIGHT;
            divMain.appendChild(canvas);

            this._layers.push(canvas.getContext('2d'));
        }

        let canvasMetadata = document.createElement("canvas");
        canvasMetadata.style.position = "absolute";
        canvasMetadata.style.left = "0px";
        canvasMetadata.style.top = "0px";
        canvasMetadata.style.zIndex = layers;
        canvasMetadata.width = 200;
        canvasMetadata.height = 200;
        divMain.appendChild(canvasMetadata);
        this._metadataLayer = canvasMetadata.getContext('2d');


        document.getElementsByTagName("BODY")[0].appendChild(divMain);
    }

    _mainLoop() {
        setTimeout(() => {
            requestAnimFrame(() => this._mainLoop());
            this._act();
            this._draw();
        }, 1000 / CONFIG.FPS);
    }

    _act() {
        if (this._status >= 0) {
            this._getStatusData(this._status).manager.act();
        }

        this._lastActionTime = new Date().getTime();
    }

    _draw() {
        if (this._status >= 0) {
            this._getStatusData(this._status).manager.draw();
        }

        this._metadataLayer.clearRect(0, 0, 200, 200);

        if (this._showFPS) {
            let nLastRedraw = new Date().getTime();
            let fps = Math.round(1000 / (nLastRedraw - this._lastRedraw));
            this._lastRedraw = nLastRedraw;

            this._metadataLayer.font = "12px Arial";
            this._metadataLayer.fillStyle = "rgb(255,0,0)";
            this._metadataLayer.fillText(`${fps} FPS`, 10, 10);
        }

        if (this._drawLimits) {
            let ctx = this._layers[this._layers.length - 1];
            ctx.beginPath();
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.rect(0, 0, CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT);
            ctx.stroke();
        }
    }

    _getStatusData(status) {
        let statusData;

        if (!this._statusData.has(status)) {
            statusData = {
                manager: false,
                beginListeners: [],
                endListeners: [],
                inited: false
            };
            this._statusData.set(status, statusData);
        } else {
            statusData = this._statusData.get(status);
        }

        return statusData;
    }

    /**
     * Método para iniciar el juego
     */
    start() {
        LOGGER.debug('game started');
        this._mainLoop();
    }

    getLastActionTimestamp() {
        return this._lastActionTime;
    }

    /**
     * Devuelve una capa de dibujado.
     * @param capa. Cuanto más elevado el número, más por encima estará de las demás. Valor entre 0 y this.getLayerCount() - 1
     */
    getLayer(layer) {
        return this._layers[layer];
    }

    getMostFrontLayer() {
        return this._layers[this._layers.length - 1];
    }

    getMostBackLayer() {
        return this._layers[0];
    }

    clearAllLayers(x, y, w, h) {

        for (let i = 0; i < this._layers.length; i++) {
            this._layers[i].clearRect(x ? x : 0, y ? y : 0, w ? w : CONFIG.SCREEN_WIDTH, h ? h : CONFIG.SCREEN_HEIGHT);
        }
    }

    /**
     * Devuelve la cantidad de capas de dibujado existentes
     */
    getLayerCount() {
        return this._layers.length;
    }

    setCurrentStatus(status) {
        if (this._status === status) return;

        LOGGER.debug('setting game status from ' + this._status + ' to ' + status);

        var oldStatusData = this._getStatusData(this._status);
        var newStatusData = this._getStatusData(status);

        if (this._status >= 0) {
            oldStatusData.manager.pause();

            let endListeners = oldStatusData.endListeners;

            for (let i = 0; i < endListeners.length; i++) {
                try {
                    endListeners[i](this._status, status);
                } catch (err) {
                    log.WARN('error executing end listener for status ' + this._status + ': ' + err);
                }
            }
        }

        this.clearAllLayers();

        this._prevStatus = this._status;
        this._status = status;

        if (newStatusData.inited) {
            newStatusData.manager.resume();
        } else {
            newStatusData.manager.start();
            newStatusData.inited = true;
        }

        let beginListeners = newStatusData.beginListeners;

        for (let i = 0; i < beginListeners.length; i++) {
            try {
                beginListeners[i](this._prevStatus, this._status);
            } catch (err) {
                LOGGER.warn('error executing begin listener for status ' + status + ': ' + err);
            }
        }
    }

    getCurrentStatus() {
        return this._status;
    }

    getPreviousStatus() {
        return this._prevStatus;
    }

    getInputManager() {
        return this._inputManager;
    }

    registerManagerForStatus(status, manager) {
        LOGGER.trace('manager registered for status ' + status);
        this._getStatusData(status).manager = manager;
    }

    getCurrentManager() {
        return this._getStatusData(this._status).manager;
    }

    getManagerForStatus(status) {
        return this._getStatusData(status).manager;
    }

    addBeginStatusListener(status, event) {
        LOGGER.trace('add begin listener to status ' + status);
        this._getStatusData(status).beginListeners.push(event);
    }

    addEndStatusListener(status, event) {
        LOGGER.trace('add end listener to status ' + status);
        this._getStatusData(status).endListeners.push(event);
    }

    showFPS(show) {
        this._showFPS = show;
    }
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
