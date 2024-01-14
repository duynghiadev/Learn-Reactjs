'use strict';

/**
 * Clase para gestionar el menú principal
 */
class Menu extends StatusManager {
    /**
     * Constructor
     * @param context instancia de la clase game (contexto del juego)
     * @param settings objeto con la configuración para el menú. Puede tener cualquiera de las propiedades de CONFIG.MENU.
     *              las propiedades que no se establezcan en settings, las cogerá por defecto de CONFIG.MENU.
     *
     */
    constructor(context, settings) {
        super(context);
        this._currentCursor = -1;
        this._needRedraw = true;
        this.inputOnListenerId = false;
        this.inputOffListenerId = false;
        this._isDownActive = false;
        this._isUpActive = false;
        this._config = Utils.mergeObjects([CONFIG.MENU, settings]);

        if (this._config.bkgImageUrl != null) {
            // Inicializamos el objeto imagen
            this._img = new Image();
            // Asignamos la url de la imagen a la imagen
            this._img.src = this._config.bkgImageUrl;
            // Agregamos como evento al cargar, que marque el sprite como cargado
            this._img.onload = () => {
                this._needRedraw = true;
            }
        }

        if (this._config.labelBkgImageUrl != null) {
            // Inicializamos el objeto imagen
            this._imgLabel = new Image();
            // Asignamos la url de la imagen a la imagen
            this._imgLabel.src = this._config.labelBkgImageUrl;
            // Agregamos como evento al cargar, que marque el sprite como cargado
            this._imgLabel.onload = () => {
                this._needRedraw = true;
            }
        }

    }

    _onInputOn(input, intensity) {
        if (input === CONS.input.P1_UP) {
            if (!this._isUpActive) {
                this._currentCursor--;

                if (this._currentCursor < 0) {
                    this._currentCursor = this._config.items.length - 1;
                }

                this._isUpActive = true;
                this._needRedraw = true;
            }
        } else if (input === CONS.input.P1_DOWN) {
            if (!this._isDownActive) {
                this._currentCursor++;

                if (this._currentCursor >= this._config.items.length) {
                    this._currentCursor = 0;
                }

                this._isDownActive = true;
                this._needRedraw = true;
            }
        }
    }

    _onInputOff(input, intensity) {
        if (input === CONS.input.P1_UP) {
            this._isUpActive = false;
        } else if (input === CONS.input.P1_DOWN) {
            this._isDownActive = false;
        }
    }

    _checkInput() {
        let nextStatus = -1;

        // Si ha pulsado aceptar y el cursor está sobre un elemento del menú, configuramos el siguiente estado
        if (this.getGameContext().getInputManager().isInputActive(CONS.input.ACCEPT) && this._currentCursor >= 0) {
            nextStatus = this._config.items[this._currentCursor].newStatus || -1;
        }

        let i = 0;

        while (i < this._config.items.length && nextStatus === -1) {
            if (this._config.items[i].key) {
                if (this.getGameContext().getInputManager().isInputActive(this._config.items[i].key)) {
                    nextStatus = this._config.items[i].newStatus || -1;
                }
            }
            i++;
        }

        return nextStatus;
    }

    act() {
        let newStatus = -1;

        newStatus = this._checkInput();

        if (newStatus != -1) {
            return this.getGameContext().setCurrentStatus(newStatus);
        }
    }

    draw() {
        // Si no necesita redibujado, volvemos
        if (!this._needRedraw) return;

        // Obtenemos la capa para dibujar el menu
        let ctx = this.getGameContext().getLayer(this._config.layer);

        // Obtenemos la posición y del primer elemento del menú a escribir
        let currentY = this._menuItemYini;

        // Guardamos el contexto de dibujo
        ctx.save();
        if (this._config.bkgImageUrl != null) {
            ctx.drawImage(this._img, 0, 0, this._img.width, this._img.height, 0, 0, CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT);
            LOGGER.debug('drawing RenderBackGroundMenu');
        } else {
            // Vaciamos toda la capa antes de pintar el menu
            ctx.clearRect(0, 0, CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT);
            //Asignamos color
            ctx.fillStyle = this._config.bkgColor;
            //Dibuja el rectangulo
            ctx.fillRect(0, 0, CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT);
        }

        if (this._config.gameTitle != null) {
            // Establecemos la fuente para escribir
            ctx.font = this._menuItemFont;
            // Establecemos color para la fuente
            ctx.fillStyle = this._config.colorTitle;
            // Alineamos el texto a la izquierda, para que la posición x coincida
            ctx.textAlign = "start";
            // Escribimos el texto (usamos fill para que las letras tengan el relleno
            ctx.fillText(this._config.gameTitle, this._menuItemX, currentY);
            // Incrementamos la posición Y actual sumándole la altura del elemento, y el margen entre elementos
            currentY += this._menuItemYIncrease + this._menuItemHeight;
        }

        // Iteramos por todos los elementos del menu
        for (let i = 0; i < this._config.items.length; i++) {
            if (this._config.title = true && i == 0) {
                i
            }
            // En caso que el cursor del menú esté sobre nuestro elemento, hemos de remarcarlo
            if (this._currentCursor === i) {
                if (this._config.labelBkgImageUrl != null) {
                    ctx.globalAlpha = this._config.labelBkgImageOpacity;
                    ctx.drawImage(this._imgLabel, 0, 0, this._imgLabel.width, this._imgLabel.height, this._config.labelBkgX, currentY - this._menuItemHeight, CONFIG.SCREEN_WIDTH, this._menuItemHeight * 1.3);
                    LOGGER.debug('drawing RenderBackGroundLabelMenu');
                    ctx.restore();
                } else {
                    // Establecemos el color de fondo
                    ctx.fillStyle = this._config.labelBkgColor;
                    // Pintamos un rectangulo encima de su posición, usando como margen el tamaño de altura del elemento (this._menuItemHeight)
                    ctx.fillRect(this._config.labelBkgX,
                        currentY - this._menuItemHeight,
                        CONFIG.SCREEN_WIDTH,
                        this._menuItemHeight * 1.3);
                }
            }

            // Establecemos la fuente para escribir
            ctx.font = this._menuItemFont;
            // Establecemos color para la fuente
            ctx.fillStyle = this._config.labelColor;
            // Alineamos el texto a la izquierda, para que la posición x coincida
            ctx.textAlign = "start";
            // Escribimos el texto (usamos fill para que las letras tengan el relleno
            ctx.fillText(this._config.items[i].label, this._menuItemX, currentY);
            // Incrementamos la posición Y actual sumándole la altura del elemento, y el margen entre elementos
            currentY += this._menuItemYIncrease + this._menuItemHeight;
        }

        // Restauramos el contexto de dibujo
        ctx.restore();

        // Como ya lo hemos pintado, ponemos a false el flag que indica la necesidad de redibujar
        this._needRedraw = false;
    }

    start() {
        LOGGER.debug("Menu start");

        this._menuItemHeight = Math.round(CONFIG.SCREEN_HEIGHT * this._config.itemHeight);
        this._menuItemFont = `${this._menuItemHeight}px ${this._config.font}`;

        this._menuItemYIncrease = Math.round(CONFIG.SCREEN_HEIGHT * this._config.itemSeparation);

        this._menuItemX = Math.round(CONFIG.SCREEN_WIDTH * this._config.itemX);
        this._menuItemYini = Math.round(CONFIG.SCREEN_HEIGHT * this._config.itemYini);
        this._menuSeparationHeight = CONFIG.SCREEN_HEIGHT * this._config.itemSeparation;

        this.resume();
    }

    pause() {
        this._needRedraw = true;

    }

    resume() {
        this.inputOnListenerId = this.getGameContext().getInputManager().addInputOnListener((input, intensity) => this._onInputOn(input, intensity));
        this.inputOffListenerId = this.getGameContext().getInputManager().addInputOffListener((input, intensity) => this._onInputOff(input, intensity));

        this._currentCursor = -1;
    }

    exit() {

    }
}
