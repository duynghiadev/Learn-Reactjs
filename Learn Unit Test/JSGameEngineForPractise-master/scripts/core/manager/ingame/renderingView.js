'use strict';

class RenderingView {
    constructor(statusManager, scenarioDefinition, actor, x, y, width, height, drawableActors) {
        this._manager = statusManager;
        this._scenario = scenarioDefinition;
        this._actor = actor;
        this._drawableActors = drawableActors ? drawableActors : Array();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._widthH = width / 2;
        this._heightH = height / 2;

        this._renderingLimits = {
            x: this._x,
            y: this._y,
            w: this._width,
            h: this._height,
            xf: this._x + this._width,
            yf: this._y + this._height
        };

        this._numCellXDraws = Math.ceil(this._width / this._scenario.cellwidth) + 1;
        this._numCellYDraws = Math.ceil(this._height / this._scenario.cellheight) + 1;
        this._numCellXDrawsH = Math.ceil(this._width / this._scenario.cellwidth / 2);
        this._numCellYDrawsH = Math.ceil(this._width / this._scenario.cellwidth / 2);

        this._drawLimits = false;
    }

    addDrawableActor(actor) {
        this._drawableActors.push(actor);
    }

    removeDrawableActor(actor) {
        let index = this._drawableActors.indexOf(actor);

        if (index >= 0) {
            this._drawableActors.splice(index, 1);
        }
    }

    draw() {
        //TODO de momento Borramos todo, mas adelante se debera tener en cuenta qué capas
        this._manager.getGameContext().clearAllLayers(this._x, this._y, this._width, this._height);
        // guardamos la posición del actor en el escenario lógico (no el de pintado)
        let actorPosition = this._actor.getPosition();
        // Calculamos el area del mapa a dibujar
        let scenarioDrawArea = {
            x: actorPosition.x - this._widthH,
            y: actorPosition.y - this._heightH,
            xf: actorPosition.x + this._widthH,
            yf: actorPosition.y + this._heightH,
            w: this._width,
            h: this._height
        };

        // calculamos la posición donde dibujar al actor
        let actorDrawPosx = this._x + this._widthH;
        let actorDrawPosy = this._y + this._heightH;

        // Si hemos llegado a los bordes del escenario, ajustar posiciones del actor y poner el area del mapa a dibujar al borde
        if (scenarioDrawArea.xf > this._scenario.width) {
            let diff = scenarioDrawArea.xf - this._scenario.width;
            scenarioDrawArea.xf = this._scenario.width;
            scenarioDrawArea.x = this._scenario.width - this._width;
            actorDrawPosx += diff;
        } else if (scenarioDrawArea.x < 0) {
            let diff = scenarioDrawArea.x * -1;
            scenarioDrawArea.x = 0;
            scenarioDrawArea.xf = this._width;
            actorDrawPosx -= diff;
        }
        if (scenarioDrawArea.yf > this._scenario.height) {
            let diff = scenarioDrawArea.yf - this._scenario.height;
            scenarioDrawArea.yf = this._scenario.height;
            scenarioDrawArea.y = this._scenario.height - this._height;
            actorDrawPosy += diff;
        } else if (scenarioDrawArea.y < 0) {
            let diff = scenarioDrawArea.y * -1;
            scenarioDrawArea.y = 0;
            scenarioDrawArea.yf = this._height;
            actorDrawPosy -= diff;
        }

        scenarioDrawArea = this.editScenarioDrawArea(scenarioDrawArea);
        actorDrawPosx = this.editActorDrawPositionX(actorDrawPosx);
        actorDrawPosy = this.editActorDrawPositionY(actorDrawPosy);

        // INICIO METODO ANTIGUO
//        // Hemos de calcular la primera celda a dibujar
//        let currentCellx = Math.floor(scenarioDrawArea.x / this._scenario.cellwidth);
//        let currentCelly = Math.floor(scenarioDrawArea.y / this._scenario.cellheight);
//
//        // Hemos de calcular a partir de que posición pintar
//        let currentDrawx = this._x + (scenarioDrawArea.x % this._scenario.cellwidth) * -1;
//        let currentDrawy = this._y + (scenarioDrawArea.y % this._scenario.cellheight) * -1;
//
//        let firstCellDrawX = 0;
//        let firstCellDrawY = 0;
//
//        if(currentDrawx-this._x < 0) {
//            firstCellDrawX = (currentDrawx-this._x) * -1;
//            currentDrawx = this._x;
//        }
//        if(currentDrawy-this._y < 0) {
//            firstCellDrawY = (currentDrawy-this._y) * -1;
//            currentDrawy = this._y;
//        }
//
//
//        if(this.onPreDraw) {
//            this.onPreDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea);
//        }
//
//        while(currentDrawy < this._height + this._y) {
//            //creamos una variable temporal para la celda x, ya que esta se irá reiniciando para cada columna pintada
//            let currentDrawxT = currentDrawx;
//            let currentCellxT = currentCellx;
//            let firstCellDrawXT = firstCellDrawX;
//
//
//            while(currentDrawxT < this._width + this._x) {
//                // Obtenemos los datos de la celda actual
//                let cellData = this._scenario.getCellData(currentCellxT, currentCelly);
//
//                if(cellData) {
//                    let actionData = cellData.sprite.getActionData(cellData.action);
//
//                    //TODO de momento, no hay animación para los sprites de las celdas.
//                    let curFrame = 0;
//
//                    let frameData = actionData.getFrameData(curFrame);
//
//                    let cellXCut = 0;
//                    let cellYCut = 0;
//
//                    if(currentDrawxT > this._width  + this._x - cellData.sprite._spriteWidth) {
//                        cellXCut =  cellData.sprite._spriteWidth - (this._width + this._x - currentDrawxT);
//                    }
//
//                    if(currentDrawy > this._height + this._y - cellData.sprite._spriteHeight) {
//                        cellYCut =  cellData.sprite._spriteHeight - (this._height + this._y - currentDrawy);
//                    }
//
//                    this._manager.getGameContext().getLayer(cellData.layer?cellData.layer:0).drawImage(
//                            cellData.sprite._img, frameData.xi+firstCellDrawXT, frameData.yi+firstCellDrawY,
//                            cellData.sprite._spriteWidth-cellXCut, cellData.sprite._spriteHeight-cellYCut,
//                            currentDrawxT, currentDrawy,
//                            this._scenario.cellwidth-cellXCut, this._scenario.cellheight-cellYCut
//                    );
//
//                }
//
//                currentDrawxT+=this._scenario.cellwidth - firstCellDrawXT;
//                currentCellxT++;
//
//                firstCellDrawXT = 0;
//
//            }
//
//            currentDrawy+=this._scenario.cellheight-firstCellDrawY;
//            currentCelly++;
//
//            firstCellDrawY = 0;
//        }
//
//
//        //Dibujamos el fondo
//        this._drawBackground(scenarioDrawArea);
        //FIN METODO ANTIGUO

        // Dibujamos las capas del escenario
        let layerImages = this._scenario.getLayerImages();
        for (let i = 0; i < this._manager.getGameContext().getLayerCount(); i++) {

            if (layerImages[i]) {
                this._manager.getGameContext().getLayer(i).drawImage(layerImages[i], scenarioDrawArea.x, scenarioDrawArea.y,
                    scenarioDrawArea.w, scenarioDrawArea.h,
                    this._x, this._y, this._width, this._height);
            }
        }

        // Dibujamos los actores visibles
        if (this._drawableActors) {
            for (let i = 0; i < this._drawableActors.length; i++) {
                let currentActor = this._drawableActors[i];
                if (Utils.hasCollission(currentActor.getBounds(), scenarioDrawArea)) {

                    let cActorPosition = currentActor.getPosition();

                    let nActorX = actorDrawPosx + cActorPosition.x - actorPosition.x;
                    let nActorY = actorDrawPosy + cActorPosition.y - actorPosition.y;
                    currentActor.draw(false,
                        nActorX,
                        nActorY,
                        false, false, this._renderingLimits);
                }
            }
        }

        if (this._drawLimits) {
            let ctx = this._manager._ctx._layers[this._manager._ctx._layers.length - 1];
            ctx.beginPath();
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.rect(this._x, this._y, this._width, this._height);
            ctx.stroke();
        }

        if (this.onPostDraw) {
            this.onPostDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea);
        }
    }

    _drawBackground(scenarioDrawArea) {
        let bkgImageCanvas = this._scenario.getBackgroundCanvas();

        if (bkgImageCanvas) {
            let ctxBkg = this._manager.getGameContext().getLayer(this._scenario.getDefinition().background.layer);

            ctxBkg.drawImage(bkgImageCanvas, scenarioDrawArea.x, scenarioDrawArea.y, scenarioDrawArea.w, scenarioDrawArea.h,
                this._x, this._y, this._width, this._height);
        }

        // Forma anterior
//        let background = this._scenario.getDefinition().background;
//
//        if(background) {
//            let ctxBkg = this._manager.getGameContext().getLayer(background.layer);
//
//            if(this._scenario.getBackgroundImage()) {
//                let img = this._scenario.getBackgroundImage();
//
//                let fromImageX = scenarioDrawArea.x < img.width? scenarioDrawArea.x : scenarioDrawArea.x % img.width;
//                let fromImageY = scenarioDrawArea.y < img.height? scenarioDrawArea.y : scenarioDrawArea.y % img.height;
//
//                let toImageX = img.width;
//                let toImageY = img.height;
//
//                let drawedY = 0;
//
//                let currentX = 0, currentY = 0;
//
//                while(drawedY < this._height) {
//                    let drawedX = 0;
//                    let fromImageXtmp = fromImageX, toImageXtmp = toImageX;
//
//                    while(drawedX < this._width) {
//                        ctxBkg.drawImage(img, fromImageXtmp, fromImageY, toImageXtmp, toImageY,
//                              drawedX+this._x, drawedY+this._y, toImageXtmp, toImageY);
//
//                        drawedX += (toImageXtmp - fromImageXtmp);
//
//                        if(drawedX > this._width - img.width ) {
//                            fromImageXtmp = 0;
//                            toImageXtmp = this._width - drawedX;
//                        } else if(fromImageXtmp > 0) {
//                            fromImageXtmp = 0;
//                            toImageXtmp = img.width;
//                        }
//                    }
//
//                    drawedY += (toImageY - fromImageY);
//                    if(drawedY > this._height - img.height ) {
//                        fromImageY = 0;
//                        toImageY = this._height - drawedY;
//                    } else if(fromImageY > 0) {
//                        fromImageY = 0;
//                        toImageY = img.height;
//                    }
//                }
//            } else if(background.color) {
//                ctxBkg.fillStyle = background.color;
//
//                ctxBkg.fillRect(this._x, this._y, this._width, this._height);
//
//            }
//        }
    }

    /**
     * Método que se invoca antes de hacer el dibujado estandar del rendering view
     * @param actorDrawPosx posición x del actor en el renderingView
     * @param actorDrawPosy posición y del actor en el renderingView
     * @param scenarioDrawArea area del escenario que va a ser dibujada (x, y, w, h, xf, yf)
     */
    onPreDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea) {
        //TODO sobreescribir
    }

    /**
     * Método que se invoca después de hacer el dibujado estandar del rendering view
     * @param actorDrawPosx posición x del actor en el renderingView
     * @param actorDrawPosy posición y del actor en el renderingView
     * @param scenarioDrawArea area del escenario que va a ser dibujada (x, y, w, h, xf, yf)
     */
    onPostDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea) {
        //TODO sobreescribir
    }

    editScenarioDrawArea(scenarioDrawArea) {
        return scenarioDrawArea;
    }

    editActorDrawPositionX(actorDrawX) {
        return actorDrawX;
    }

    editActorDrawPositionY(actorDrawY) {
        return actorDrawY;
    }
}
