'use strict';

/**
 * LISTADO DE DEFINICIONES DE LOS SPRITES EXISTENTES
 */
var SPRITES = Array();

SPRITES[CONS.sprites.PRINCE] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.QUIET_D, 0, 1, 1, 1, false);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.QUIET_L, 1, 1, 1, 1, false);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.QUIET_R, 2, 1, 1, 1, false);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.QUIET_U, 3, 1, 1, 1, false);

    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_D, 0, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_L, 1, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_R, 2, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_U, 3, 0, 1, 3, 4);

    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_GUN_D, 8, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_GUN_L, 9, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_GUN_R, 10, 0, 1, 3, 4);
    SPRITES[CONS.sprites.PRINCE].addActionData(CONS.spriteAction.MOVE_GUN_U, 11, 0, 1, 3, 4);
});

SPRITES[CONS.sprites.BALD] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.QUIET_D, 0, 4, 1, 1, false);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.QUIET_L, 1, 4, 1, 1, false);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.QUIET_R, 2, 4, 1, 1, false);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.QUIET_U, 3, 4, 1, 1, false);

    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_D, 0, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_L, 1, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_R, 2, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_U, 3, 3, 1, 3, 4);

    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_GUN_D, 8, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_GUN_L, 9, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_GUN_R, 10, 3, 1, 3, 4);
    SPRITES[CONS.sprites.BALD].addActionData(CONS.spriteAction.MOVE_GUN_U, 11, 3, 1, 3, 4);
});

SPRITES[CONS.sprites.ADVENTURESS] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.QUIET_D, 0, 7, 1, 1, false);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.QUIET_L, 1, 7, 1, 1, false);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.QUIET_R, 2, 7, 1, 1, false);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.QUIET_U, 3, 7, 1, 1, false);

    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_D, 0, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_L, 1, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_R, 2, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_U, 3, 6, 1, 3, 4);

    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_GUN_D, 8, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_GUN_L, 9, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_GUN_R, 10, 6, 1, 3, 4);
    SPRITES[CONS.sprites.ADVENTURESS].addActionData(CONS.spriteAction.MOVE_GUN_U, 11, 6, 1, 3, 4);
});

SPRITES[CONS.sprites.PROFESSOR] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.QUIET_D, 0, 10, 1, 1, false);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.QUIET_L, 1, 10, 1, 1, false);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.QUIET_R, 2, 10, 1, 1, false);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.QUIET_U, 3, 10, 1, 1, false);

    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_D, 0, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_L, 1, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_R, 2, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_U, 3, 9, 1, 3, 4);

    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_GUN_D, 8, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_GUN_L, 9, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_GUN_R, 10, 9, 1, 3, 4);
    SPRITES[CONS.sprites.PROFESSOR].addActionData(CONS.spriteAction.MOVE_GUN_U, 11, 9, 1, 3, 4);
});

SPRITES[CONS.sprites.SHORTGREEN1] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.QUIET_D, 4, 1, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.QUIET_L, 5, 1, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.QUIET_R, 6, 1, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.QUIET_U, 7, 1, 1, 1, false);

    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_D, 4, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_L, 5, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_R, 6, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_U, 7, 0, 1, 3, 4);

    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_GUN_D, 12, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_GUN_L, 13, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_GUN_R, 14, 0, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN1].addActionData(CONS.spriteAction.MOVE_GUN_U, 15, 0, 1, 3, 4);
});

SPRITES[CONS.sprites.GRAYNINJA] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.QUIET_D, 4, 4, 1, 1, false);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.QUIET_L, 5, 4, 1, 1, false);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.QUIET_R, 6, 4, 1, 1, false);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.QUIET_U, 7, 4, 1, 1, false);

    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_D, 4, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_L, 5, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_R, 6, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_U, 7, 3, 1, 3, 4);

    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_GUN_D, 12, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_GUN_L, 13, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_GUN_R, 14, 3, 1, 3, 4);
    SPRITES[CONS.sprites.GRAYNINJA].addActionData(CONS.spriteAction.MOVE_GUN_U, 15, 3, 1, 3, 4);
});

SPRITES[CONS.sprites.LONGGREEN] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.QUIET_D, 4, 7, 1, 1, false);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.QUIET_L, 5, 7, 1, 1, false);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.QUIET_R, 6, 7, 1, 1, false);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.QUIET_U, 7, 7, 1, 1, false);

    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_D, 4, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_L, 5, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_R, 6, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_U, 7, 6, 1, 3, 4);

    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_GUN_D, 12, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_GUN_L, 13, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_GUN_R, 14, 6, 1, 3, 4);
    SPRITES[CONS.sprites.LONGGREEN].addActionData(CONS.spriteAction.MOVE_GUN_U, 15, 6, 1, 3, 4);
});

SPRITES[CONS.sprites.SHORTGREEN2] = new SpriteData('img/personatges_conYsin_pistola.png', 32, 32, function () {
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.QUIET_D, 4, 10, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.QUIET_L, 5, 10, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.QUIET_R, 6, 10, 1, 1, false);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.QUIET_U, 7, 10, 1, 1, false);

    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_D, 4, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_L, 5, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_R, 6, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_U, 7, 9, 1, 3, 4);

    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_GUN_D, 12, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_GUN_L, 13, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_GUN_R, 14, 9, 1, 3, 4);
    SPRITES[CONS.sprites.SHORTGREEN2].addActionData(CONS.spriteAction.MOVE_GUN_U, 15, 9, 1, 3, 4);
});

SPRITES[CONS.sprites.BOMB] = new SpriteData('img/bomb2.png', 32, 60, function () {
    SPRITES[CONS.sprites.BOMB].addActionData(CONS.spriteAction.QUIET, 0, 0, 1, 1, false);
    SPRITES[CONS.sprites.BOMB].addActionData(CONS.spriteAction.WAITING_EXPLOTE, 0, 0, 1, 6, 10);
    SPRITES[CONS.sprites.BOMB].addActionData(CONS.spriteAction.EXPLOTE_001, 0, 6, 1, 7, 4);
});

SPRITES[CONS.sprites.FLAREON] = new SpriteData('img/pokemons.png', 32, 32, function () {
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.QUIET_D, 1, 0, 1, 1, false);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.QUIET_L, 1, 6, 1, 1, false);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.QUIET_R, 1, 9, 1, 1, false);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.QUIET_U, 1, 3, 1, 1, false);

    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.MOVE_D, 1, 0, 1, 3, 4);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.MOVE_L, 1, 6, 1, 3, 4);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.MOVE_R, 1, 9, 1, 3, 4);
    SPRITES[CONS.sprites.FLAREON].addActionData(CONS.spriteAction.MOVE_U, 1, 3, 1, 3, 4);

});

SPRITES[CONS.sprites.RAICHU] = new SpriteData('img/pokemons.png', 32, 32, function () {
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.QUIET_D, 3, 0, 1, 1, false);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.QUIET_L, 3, 6, 1, 1, false);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.QUIET_R, 3, 9, 1, 1, false);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.QUIET_U, 3, 3, 1, 1, false);

    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.MOVE_D, 3, 0, 1, 3, 4);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.MOVE_L, 3, 6, 1, 3, 4);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.MOVE_R, 3, 9, 1, 3, 4);
    SPRITES[CONS.sprites.RAICHU].addActionData(CONS.spriteAction.MOVE_U, 3, 3, 1, 3, 4);

});

SPRITES[CONS.sprites.TERRAIN_001] = new SpriteData('img/ground.png', 62, 62, function () {
    SPRITES[CONS.sprites.TERRAIN_001].addActionData(CONS.spriteAction.ROCK_001, 0, 0, 1, 1, false);
});

