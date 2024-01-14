'use strict';

class Actor {
    /**
     * Constructor
     * @param context contexto del juego
     * @param nlayer numero de capa donde el personaje se dibuja por defecto
     * @param x posicion x inicial del actor
     * @param y posicion y inicial del actor
     * @param width ancho del actor
     * @param height alto del actor
     * @param collides indica si es un actor físico (colisiona con otros) o no
     */
    constructor(context, nlayer, x, y, width, height, collides) {
        this._ctx = context;
        this._nlayer = nlayer;
        this._layer = context.getLayer(nlayer);
        this._x = x || 0;
        this._y = y || 0;

        this._initialX = this._x;
        this._initialY = this._y;

        this._w = width;
        this._h = height;

        // Guardamos la mitad de las dimensiones para calcular areas
        this._wh = (this._w / 2).toFixed(0);
        this._hh = (this._h / 2).toFixed(0);

        this._collides = collides;

        this._currentScenarioDistances = false;
    }

    /**
     * Devuelve el contexto del juego
     */
    getGameContext() {
        return this._ctx;
    }

    /**
     * Establece la ubiación del actor
     */
    setPosition(x, y) {
        this._xb = this._x;
        this._yb = this._y;
        this._x = x;
        this._y = y;
    }

    setDimensions(width, height) {
        this._w = width;
        this._h = height;
    }

    /**
     * Mueve el jugador en el eje x
     */
    moveX(increment) {
        this.setPosition(this._x + increment, this._y);
    }

    /**
     * Mueve el jugador en el eje y
     */
    moveY(increment) {
        this.setPosition(this._x, this._y + increment);
    }

    move(xinc, yinc) {
        this.setPosition(this._x + xinc, this._y + yinc);
    }

    /**
     * Devuelve la posicion del actor. Objeto con 4 atributos:
     * x: posicion x
     * y: posicion y
     * xb: posicion x anterior
     * yb: posicion y anterior
     *
     */
    getPosition() {
        return {
            x: this._x,
            y: this._y,
            xb: this._xb,
            yb: this._yb
        };
    }

    /**
     * Devuelve las dimensiones del personaje. Objeto con atributos:
     * w: ancho
     * y: alto
     *
     */
    getDimensions() {
        return {
            w: this._w,
            h: this._h
        };
    }

    /**
     *  Devuelve el recuadro actual del personaje. Objeto con atributos:
     *  x = x inicial
     *  y= y inicial
     *  xf = x final
     *  yf = y final
     *  w = ancho
     *  h = alto
     */
    getBounds() {
        return {
            x: this._x,
            y: this._y,
            xf: this._x + this._w,
            yf: this._y + this._h,
            w: this._w,
            h: this._h
        };
    }

    /**
     *  Devuelve el recuadro anterior del personaje. Objeto con atributos:
     *  xi = x inicial
     *  yi= y inicial
     *  xf = x final
     *  yf = y final
     *  w = ancho
     *  h = alto
     */
    getPreviousBounds() {
        return {
            xi: this._xb - this._wh,
            yi: this._yb - this._hh,
            xf: this._xb + this._wh,
            yf: this._yb + this._hh,
            w: this._w,
            h: this._h
        };
    }

    setCurrentScenarioDistances(curDistances) {
        this._currentScenarioDistances = curDistances;
    }

    /**
     *  Devuelve un mapa con las distancias entre el jugador y la celda colisionable más cercana.
     *  Las claves del mapa son las direcciones (CONS.direction).
     *  El valor es la distancia. Por lo tanto, si el valor para una dirección es menor a 0, quiere decir que ya está en colisión
     */
    getCurrentScenarioDistances() {
        return this._currentScenarioDistances;
    }


    isCollisionable() {
        return this._collides;
    }

    setCollisionable(collides) {
        this._collides = collides;
    }

    act() {
        //TODO sobreescribir
    }

    draw(ctx, x, y, w, h, drawLimits) {
        //TODO sobreescribir
    }

    /**
     * Método que se ejecuta cuando el actor entra en colisión con otro actor
     * @param otherActor el actor con el que se encuentra
     */
    onCollission(otherActor) {
        //TODO sobreescribir
    }

    /**
     * Método que se ejecuta cuando el actor entra en colisión con celdas del escenario
     * @param scenarioCells array de celdas con las que entra en contacto (listado de scenarioDefinition.getCellData)
     */
    onScenarioCollission(scenarioCells) {
        //TODO sobreescribir
    }
}
