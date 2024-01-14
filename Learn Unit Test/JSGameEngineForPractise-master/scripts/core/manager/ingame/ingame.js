'use strict';

class InGame extends StatusManager {
    constructor(context) {
        super(context);
        this._actorList = Array();
        this._renderingViews = new Map();
        this._players = Array();
        this._scenario = false;

        this._drawLimits = false;
    }

    addActor(actor, checkScenarioCollissions) {
        if (checkScenarioCollissions === true) {
            actor.checkScenarioCollissions = true;
        }

        this._actorList.push(actor);

        let renderingViewIt = this._renderingViews.values();

        let renderingViewNext = renderingViewIt.next();

        while (!renderingViewNext.done) {
            let rv = renderingViewNext.value;

            rv.addDrawableActor(actor);

            renderingViewNext = renderingViewIt.next();
        }
    }

    removeActor(actor) {

        let renderingViewIt = this._renderingViews.values();

        let renderingViewNext = renderingViewIt.next();

        while (!renderingViewNext.done) {
            let rv = renderingViewNext.value;

            rv.removeDrawableActor(actor);

            renderingViewNext = renderingViewIt.next();
        }

        let index = this._actorList.indexOf(actor);

        if (index >= 0) {
            this._actorList.splice(index, 1);
        }
    }

    setPlayer1(actor) {
        this._players[0] = actor;
    }

    getPlayer1() {
        return this._players[0];
    }

    setPlayer2(actor) {
        this._players[1] = actor;
    }

    getPlayer2() {
        return this._players[1];
    }

    _manageActorScenarioCollissions(actor) {
        if (!actor.setCurrentScenarioDistances) return;

        // Informamos de la distancia que hay, para cada dirección, con una celda sólida.
        // Antes de nada, dejamos como margen un 10% del tamaño del personaje
        let colMargin = actor._w * 0.1;
        let colMargin2 = colMargin * 2;

        // Objeto con la información
        let distances = new Map();

        let collisionBoundsL = {
            x: 0, y: actor._y + colMargin,
            w: actor._x, h: actor._h - colMargin2
        };
        let collisionBoundsR = {
            x: actor._x + actor._w, y: collisionBoundsL.y,
            w: this._scenario.width - collisionBoundsL.x, h: collisionBoundsL.h
        };
        let collisionBoundsU = {
            x: actor._x + colMargin, y: 0,
            w: actor._w - colMargin2, h: actor._y
        };
        let collisionBoundsD = {
            x: collisionBoundsU.x, y: actor._y + actor._h,
            w: collisionBoundsU.w, h: this._scenario.height - collisionBoundsU.y
        };

        let distanceL = actor._x;
        let distanceR = this._scenario.width - collisionBoundsR.x;
        let distanceU = actor._y;
        let distanceD = this._scenario.height - collisionBoundsD.y;

        for (let cell of this._scenario._elements.values()) {
            if (cell.solid === false) continue;

            if (Utils.hasCollission(collisionBoundsL, cell.bounds)) {
                let curDiff = actor._x - (cell.bounds.x + cell.bounds.w);

                if (curDiff < distanceL) {
                    distanceL = curDiff;
                }
            } else if (Utils.hasCollission(collisionBoundsR, cell.bounds)) {
                let curDiff = cell.bounds.x - collisionBoundsR.x;

                if (curDiff < distanceR) {
                    distanceR = curDiff;
                }
            } else if (Utils.hasCollission(collisionBoundsU, cell.bounds)) {
                let curDiff = actor._y - (cell.bounds.y + cell.bounds.h);

                if (curDiff < distanceU) {
                    distanceU = curDiff;
                }
            } else if (Utils.hasCollission(collisionBoundsD, cell.bounds)) {
                let curDiff = cell.bounds.y - collisionBoundsD.y;

                if (curDiff < distanceD) {
                    distanceD = curDiff;
                }
            }
        }

        distances.set(CONS.direction.LEFT, distanceL);
        distances.set(CONS.direction.RIGHT, distanceR);
        distances.set(CONS.direction.UP, distanceU);
        distances.set(CONS.direction.DOWN, distanceD);

        actor.setCurrentScenarioDistances(distances);
    }

    act() {

        if (this._scenario) {
            this._scenario.act();
        }

        for (let i = 0; i < this._players.length; i++) {
            // Area del jugador actual
            let playerBounds = this._players[i].getBounds();

            // Validamos si colisiona con algún otro jugador
            for (let p = i + 1; p < this._players.length; p++) {

                if (Utils.hasCollission(this._players[p].getBounds(), playerBounds)) {
                    this._players[i].onCollission(this._players[p]);
                    this._players[p].onCollission(this._players[i]);
                }
            }
            // Validamos si colisiona con algún actor
            for (let a = 0; a < this._actorList.length; a++) {
                if (Utils.hasCollission(this._actorList[a].getBounds(), playerBounds)) {
                    //TODO ¿se dispara el evento del actor toca al jugador, el jugador toca al actor, o ambos?
                    //TODO de momento, asumiremos que la lógica de la acción de la colisión recae sobre el actor
                    //TODO (el actor determina qué hacer con el player)
                    this._actorList[a].onCollission(this._players[i]);
                    //TODO no obstante, también informaremos al player (se puede quitar si no es necesario y/o da problemas)
                    this._players[i].onCollission(this._actorList[a]);
                }
            }

            // Validamos si colisiona con elementos físicos del escenario
            if (this._scenario) {

                this._manageActorScenarioCollissions(this._players[i]);
            }

            this._players[i].act();
        }

        for (let i = 0; i < this._actorList.length; i++) {
            if (this._actorList[i].checkScenarioCollissions === true) {
                this._manageActorScenarioCollissions(this._actorList[i]);
            }

            this._actorList[i].act();
        }
    }

    setScenarioDefinition(sd) {
        this._scenario = sd;
        this._scenario._ctx = this._ctx;
    }

    getScenarioDefinition() {
        return this._scenario;
    }

    addRenderingView(rv) {
        let id = Utils.generateUUID();
        this._renderingViews.set(id, rv);
        return id;
    }

    getRenderingView(id) {
        return this._renderingViews.get(id);
    }

    removeRenderingView(id) {
        this._renderingViews.delete(id);
    }

    draw() {
        let renderingViewIt = this._renderingViews.values();

        let renderingViewNext = renderingViewIt.next();

        while (!renderingViewNext.done) {
            let rv = renderingViewNext.value;

            rv.draw();

            renderingViewNext = renderingViewIt.next();
        }
    }
}
