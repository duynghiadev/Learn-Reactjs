'use strict';

/**
 * Clase para gestionar una imagen sprite.
 *
 */
class SpriteData {
    /**
     * Constructor
     * @param imageUrl: url de la imagen con los sprites
     * @param spriteWidth: ancho en píxeles de cada sprite
     * @param spriteHeight: altura en píxeles de cada sprit
     * @param onLoad: función a ejecutar una vez la imagen se ha cargado
     */
    constructor(imageUrl, spriteWidth, spriteHeight, onLoad) {
        this._actions = new Map();

        this._spriteWidth = spriteWidth;
        this._spriteHeight = spriteHeight;

        // Esta variable nos servirá para saber si el sprite se ha cargado completamente
        this._ready = false;
        // Inicializamos el objeto imagen
        this._img = new Image();
        // Agregamos como evento al cargar, que marque el sprite como cargado
        this._img.onload = () => {
            if (onLoad) onLoad();
            this._ready = true;
        };
        // Asignamos la url de la imagen a la imagen
        this._img.src = imageUrl;
    }

    /**
     * Agrega la definición de una acción del sprite
     * @param action: id de la acción (Nota: las acciones estandar están definidas en CONS.spriteAction)
     * @param initialRow: fila inicial de los sprites para la acción (empezando por 0)
     * @param initialCol: columna inicial de los sprites para la acción (empezando por 0)
     * @param numRows: cantidad de filas que ocupa la acción del sprite
     * @param numCols: cantidad de columnas que ocupa la acción del sprite
     * @param duplicateFrames: indica si se quiere multiplicar frames. Valor numérico.
     *                      (animacion mas lenta, adecuado para las que tienen pocos fotogramas)
     *
     */
    addActionData(action, initialRow, initialCol, numRows, numCols, duplicateFrames) {

        var spriteAction = new SpriteAction(action, numRows * numCols);

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {

                let x = (initialCol + col) * this._spriteWidth;
                let y = (initialRow + row) * this._spriteHeight;

                let frameData = {
                    xi: x,
                    yi: y,
                    xf: x + this._spriteWidth,
                    yf: y + this._spriteHeight
                };

                spriteAction.addFrameData(frameData);

                if (duplicateFrames) {

                    if (isNaN(duplicateFrames)) {
                        duplicateFrames = 2;
                    }

                    duplicateFrames = Number(duplicateFrames);

                    for (let di = 1; di < duplicateFrames; di++) {
                        spriteAction.addFrameData(frameData);
                    }
                }
            }
        }

        this._actions.set(action, spriteAction);
    }

    /**
     * Devuelve la definición de una acción
     */
    getActionData(action) {
        return this._actions.get(action);
    }

    /**
     * Determina si el sprite ha sido cargado
     */
    isReady() {
        return this._ready;
    }

    /**
     * Dibuja un sprite
     * @param ctx contexto para el dibujado
     * @param x posicion x
     * @param y posicion y
     * @param frameData datos del Frame de la acción
     * @param w ancho de la zona de dibujo (opcional. Por defecto, ancho del sprite)
     * @param h alto de la zona de dibujo (opcional. Por defecto, alto del sprite)
     * @param drawBorders flag para indicar si se dibujan bordes delimitando la zona del sprite
     */
    //TODO revisar
    drawSprite(ctx, x, y, frameData, w, h, drawBorders) {
        //ctx.drawImage(this._img, x, y, this._spriteWidth, this._spriteHeight, frameData.xi, frameData.yi, this._spriteWidth, this._spriteHeight);
        //ctx.clearRect ( x , y , this._spriteWidth, this._spriteHeight);

        w = w ? w : this._spriteWidth;
        h = h ? h : this._spriteHeight;

        if (drawBorders) {
            ctx.beginPath();
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.rect(x, y, w, h);
            ctx.stroke();
        }

        ctx.drawImage(this._img, frameData.xi, frameData.yi, this._spriteWidth, this._spriteHeight, x, y, w, h);
    }

    /**
     * Devuelve el tamaño del sprite. Objeto con las propiedadeS:
     * - w: ancho
     * - h: alto
     */
    getSpriteSize() {
        return {
            w: this._spriteWidth,
            h: this._spriteHeight
        };
    }
}
