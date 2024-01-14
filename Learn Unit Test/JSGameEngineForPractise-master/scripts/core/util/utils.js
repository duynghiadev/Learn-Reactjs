'use strict';

/**
 * Agrupación de métodos útiles varios
 */
var Utils = {
    /**
     *  Genera un identificador único
     */
    generateUUID: function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },
    /**
     * Mezcla varios objetos json dando como resultado un objeto json con todas las propiedades.
     * Si la misma propiedad existe en todos los objetos, prevalecerá la del último elemento
     * @param obj array de objetos JSON a mezclar
     */
    mergeObjects: function (objs) {
        var result = {};

        for (let i = 0; i < objs.length; i++) {
            if (objs[i]) {
                for (var key in objs[i]) {
                    if (objs[i].hasOwnProperty(key)) {
                        result[key] = objs[i][key];
                    }
                }
            }
        }

        return result;
    },

    /**
     * Determina si dos areas rectangulares están en colisión
     */
    hasCollission: function (rect1, rect2) {
        return (rect1.x < rect2.x + rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h &&
            rect1.h + rect1.y > rect2.y);
    }
};
