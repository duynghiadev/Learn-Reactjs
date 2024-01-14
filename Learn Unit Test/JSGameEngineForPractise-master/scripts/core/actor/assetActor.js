'use strict';

/**
 * Clase que gestiona a un Actor basado en un sprite
 */
class AssetActor extends Actor {

    /**
     * Constructor
     * @param context contexto del juego
     * @param nlayer numero de capa donde el personaje se dibuja por defecto
     * @param x posicion x inicial del actor
     * @param y posicion y inicial del actor
     * @param width ancho del actor
     * @param height alto del actor
     * @param collides indica si es un actor físico (colisiona con otros) o no
     * @param spriteData objeto spriteData que contiene el sprite del Actor
     */
    constructor(context, nlayer, x, y, width, height, collides, spriteData) {
        super(context, nlayer, x, y, width, height, collides);
        this._spriteData = spriteData;
        this._currentSpriteFrame = -1;
        this._currentSpriteAction = CONS.spriteAction.QUIET_D;
        this._animate = false;
    }

    /**
     * Establece la acción a representar del sprite
     * @param spriteAction acción a establecer (mirar CONS.spriteAction)
     */
    setSpriteAction(spriteAction) {
        if (this._currentSpriteAction === spriteAction) return;

        this._currentSpriteAction = spriteAction;
        this._currentSpriteFrame = 0;
    }

    /**
     * Establece si se ha de animar el actor, o el sprite ha de permanecer estático
     */
    setAnimate(animate) {
        if (this._animate === animate) return;

        this._currentSpriteFrame = 0;
        this._animate = animate;
    }

    act() {
        super.act();

        if (this._spriteData) {
            this._currentSpriteFrame++;

            let actionData = this._spriteData.getActionData(this._currentSpriteAction);

            if (this._currentSpriteFrame >= actionData.getNumFrames()) {
                this._currentSpriteFrame = 0;
            }
        }

    }

    /**
     * Redibuja al personaje
     * @param ctx capa donde dibujar
     * @param x posición x para dibujar
     * @param y posición y para dibujar
     * @param w ancho para dibujar
     * @param h alto para dibujar
     * @param drawLimits dimensiones del rendering view donde se dibuja
     */
    draw(ctx, x, y, w, h, drawLimits) {
//        // Si no se ha de animar, no hacemos nada
//        if(!this._animate) return;

        ctx = ctx ? ctx : this._layer;
        x = x ? x : this._x;
        y = y ? y : this._y;
        w = w ? w : this._w;
        h = h ? h : this._h;

//        let prevBounds = this.getPreviousBounds();
//
//        // Borramos su posición anterior
//        ctx.clearRect(prevBounds.xi, prevBounds.xf, prevBounds.w, prevBounds.h);
        let actionData = this._spriteData.getActionData(this._currentSpriteAction);

        // Dibujamos al personaje en su posicion actual
        this._spriteData.drawSprite(ctx, x, y,
            actionData.getFrameData(this._currentSpriteFrame), w, h);
    }
}
