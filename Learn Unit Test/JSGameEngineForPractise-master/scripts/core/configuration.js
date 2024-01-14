'use strict';

/**
 * Configuración del Juego por defecto
 */
var CONFIG =
    {
        /**
         * Ancho de pantalla
         */
        SCREEN_WIDTH: 800,
        /**
         * alto de pantalla
         */
        SCREEN_HEIGHT: 480,
        /**
         * Frames por segundo
         */
        FPS: 60,


        /**
         * Logging.
         */
        // Patón para el log
        LOGGING_PATTERN: '{DATE} {LEVEL} {MESSAGE}',
        // Nivel de log
        LOGGING_LEVEL: CONS.logLevel.WARN,


        INPUT_TYPES: [CONS.inputType.KEYBOARD],

        /**
         * Mapeo de input con teclas del teclado
         */
        INPUT_KEYBOARD_MAPPING: {
            P1_UP: 'w',
            P1_DOWN: 's',
            P1_LEFT: 'a',
            P1_RIGHT: 'd',
            P2_UP: 'up',
            P2_DOWN: 'down',
            P2_LEFT: 'left',
            P2_RIGHT: 'right',
            ACCEPT: 'enter',
            CANCEL: 'esc',
            P1_ACTION_01: 'g',
            P1_ACTION_02: 'h',
            P1_ACTION_03: 'f',
            P2_ACTION_01: 'o',
            P2_ACTION_02: 'p',
            P2_ACTION_03: 'i',
            ACTION_05: 'enter'
        },

        /*************************************
         *************************************
         * Configuración del menú por defecto
         *************************************
         *************************************/
        MENU: {
            /**
             * Elementos del menú
             */
            items: [],
            /**
             * Altura de cada elemento del menu (proporcional a la altura del canvas)
             */
            itemHeight: 0.1,
            /**
             * Separación entre elementos del menu (proporcional a la altura del canvas)
             */
            itemSeparation: 0.2,
            /**
             * Posición x de los elementos (proporcional al ancho del canvas)
             */
            itemX: 0.2,
            /**
             * Posición y del primer elemento (proporcional a la altura del canvas)
             */
            itemYini: 0.2,
            /**
             * Posicion X del background del label
             */
            labelBkgX: 0,
            /**
             * Tipo de fuente
             */
            font: 'Arial',
            /**
             * Background image
             */
            bkgImageUrl: null,
            /**
             * Background color
             */
            bkgColor: 'white',
            /**
             * Label background color
             */
            labelBkgColor: 'rgba(44,73,50,0.5)',
            /**
             * Label color
             */
            labelColor: 'black',
            /**
             * Background tipo imagen del label
             */
            labelBkgImageUrl: null,
            /**
             * Label background image opacity
             * default = 1 (without opacity)
             */
            labelBkgImageOpacity: 1,
            /**
             * Capa del juego a utilizar para renderizar el menu
             */
            layer: 0,

            gameTitle: null,

            colorTitle: 'black',
        }

    };
