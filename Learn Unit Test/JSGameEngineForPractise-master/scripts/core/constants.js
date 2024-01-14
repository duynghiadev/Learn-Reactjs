'use strict';

/**
 * Definición de constantes para el juego
 */
var CONS =
    {
        // Niveles de log
        logLevel: {
            TRACE: {value: 10, text: 'TRACE'},
            DEBUG: {value: 20, text: 'DEBUG'},
            INFO: {value: 30, text: 'INFO'},
            WARN: {value: 40, text: 'WARN'},
            ERROR: {value: 50, text: 'ERROR'},
            FATAL: {value: 60, text: 'FATAL'},
            ALL: {value: -9999},
            NONE: {value: 9999}
        },
        // Estados del juego
        status: {
            LOADING: 1, // Cargando
            PAUSED: 2, // Juego en pausa
            RUNNING: 3, // Juego en ejecución
            MENU: 4, // Mostrando el menú
            GAME_OVER: 5, // Fin del juego,
            CUSTOM_MENU_01: 10, // Submenú / otro menú personalizado 1
            CUSTOM_MENU_02: 11, // Submenú / otro menú personalizado 2
            CUSTOM_MENU_03: 12, // Submenú / otro menú personalizado 3
            CUSTOM_MENU_04: 13, // Submenú / otro menú personalizado 4
            CUSTOM_MENU_05: 14, // Submenú / otro menú personalizado 5
            CUSTOM_001: 100,
            CUSTOM_002: 101,
            CUSTOM_003: 102,
            CUSTOM_004: 103,
            CUSTOM_005: 104
        },
        // Acciones para los sprites
        spriteAction: {
            QUIET_L: 0, // Sin movimiento, mirando hacia la izquierda
            QUIET_R: 1, // Sin movimiento, mirando hacia la derecha
            QUIET_U: 2, // Sin movimiento, mirando hacia arriba
            QUIET_D: 3, // Sin movimiento, mirando hacia abajo
            QUIET: 4, // Sin movimiento, sin dirección especificada
            MOVE_L: 10, // Movimiento hacia la izquierda
            MOVE_R: 11, // Movimiento hacia la derecha
            MOVE_U: 12, // Movimiento hacia arriba
            MOVE_D: 13, // Movimiento hacia abajo
            MOVE_GUN_L: 14, //Movimiento hacia la izquierda con pistola
            MOVE_GUN_R: 15, //Movimiento hacia la derecha con pistola
            MOVE_GUN_U: 16, //Movimietno hacia arriba con pistola
            MOVE_GUN_D: 17, //Movimiento hacia abajo con pistola
            WAITING_EXPLOTE: 100,//Antes de estallar la Bomba
            EXPLOTING_001: 101,//Accion Bomba explota
            ROCK_001: 500 //Escenario Roca
        },
        // Entradas (teclado, touch...)
        input: {
            P1_UP: 0, // Jugador uno arriba
            P1_DOWN: 1, // Jugador uno abajo
            P1_LEFT: 2, // Jugador uno izquierda
            P1_RIGHT: 3, // Jugador uno derecha
            P2_UP: 10, // Jugador dos arriba
            P2_DOWN: 11, // Jugador dos abajo
            P2_LEFT: 12, // Jugador dos izquierda
            P2_RIGHT: 13, // Jugador dos derecha
            ACCEPT: 20, // Aceptar
            CANCEL: 21, // Cancelar
            P1_ACTION_01: 50, // Acción 01
            P1_ACTION_02: 51, // Acción 02
            P1_ACTION_03: 52, // Acción 02
            P2_ACTION_01: 60, // Acción 03
            P2_ACTION_02: 61, // Acción 04
            P2_ACTION_03: 62, // Acción 04
            ACTION_05: 54  // Acción 05
        },

        // Tipos de input
        inputType: {
            UNDEFINED: -1,
            KEYBOARD: 0,
            TOUCH_PANEL: 1,
            MOUSE: 2
        },

        // Direcciones
        direction: {
            UP: 0,
            DOWN: 1,
            LEFT: 2,
            RIGHT: 3
        }
    };
