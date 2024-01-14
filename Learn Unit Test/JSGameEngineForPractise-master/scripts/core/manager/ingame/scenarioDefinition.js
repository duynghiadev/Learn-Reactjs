'use strict';

class ScenarioDefinition {
    constructor(definition, cellwidth, cellheight, isDynamic) {
        this._def = definition;
        this.cellwidth = cellwidth;
        this.cellheight = cellheight;
        this.numCellsX = definition.scenarioDefinition[0].length;
        this.numCellsY = definition.scenarioDefinition.length;
        this.width = this.numCellsX * this.cellwidth;
        this.height = this.numCellsY * this.cellheight;
        this._cellDefs = new Map();

        this._layerImages = false;

        if (isDynamic) {
            this._dynamic = true;
        } else {
            this._dynamic = false;
        }

        for (let key in this._def.cellDefinitions) {
            if (this._def.cellDefinitions.hasOwnProperty(key)) {
                this._cellDefs.set(key, this._def.cellDefinitions[key]);
            }
        }

        this._bkgImage = false;

        if (definition.background.image) {
            this._bkgImageTmp = new Image();
            this._bkgImageTmp.onload = () => {
                this._bkgImage = this._bkgImageTmp;
                this._bkgImageTmp = false;
                this._refreshScenarioBackground();
            };
            this._bkgImageTmp.src = definition.background.image;
        }

        this._elements = new Map();

        for (let y = 0; y < this.numCellsY; y++) {
            for (let x = 0; x < this.numCellsX; x++) {

                let scenarioCellType = this._def.scenarioDefinition[y][x];

                if (scenarioCellType !== ' ') {
                    let cellContent = this._cellDefs.get(scenarioCellType);

                    let elm = {
                        type: scenarioCellType,
                        x: x,
                        y: y,
                        numFrame: 0,
                        bounds: {
                            x: x * this.cellwidth,
                            y: y * this.cellheight,
                            w: this.cellwidth,
                            h: this.cellheight
                        }
                    };

                    elm = Utils.mergeObjects([cellContent, elm]);

                    this._elements.set(x + '-' + y, elm);
                }
            }
        }
    }

    getDefinition() {
        return this._def;
    }

    _isCellContentEmpty(cellContent) {
        return cellContent === '' || cellContent === '$';
    }

    isCellEmpty(x, y) {
        return this._elements.has(x + '-' + y);
    }

    /**
     * Recupera la información de una celda
     * @params x celda x
     * @params y celda y
     * @return información de la celda. Contiene las siguientes propiedades:
     *     - type: tipo de celda
     *     - x: celda x
     *     - y: celda y
     *     - numFrame: número del frame actual de la animación de la celda
     *     - bounds: posición de la celda en el escenario (x, y, w, h)
     *     - El resto de propiedades heredadas de la definición de la celda (propiedades de cellDefinitions)
     */
    getCellData(x, y) {
        let cellContent = this._elements.get(x + '-' + y);

        if (cellContent === undefined) return false;

        return cellContent;
    }

    getBackgroundImage() {
        return this._bkgImage;
    }

    /**
     * Recupera un listado de celdas ubicadas en el area especificada
     * @param bounds area especificada (objeto con propiedades x, y, width, height)
     * @return listado de datos de celdas ubicadas en esa area (@see retorno de getCellData)
     */
    getCellsDataByBounds(bounds) {
        //TODO este método se puede optimizar fijando un rango de celdas x e y que estén en los bounds especificados.
        //TODO de esta forma, solo se comprobarán los elementos que estén en esas celdas.
        //TODO de momento, recorro todos los elementos validando si están colisionando

        let cells = Array();

        let cellElementsIt = this._elements.values();

        let cellElementsNext = cellElementsIt.next();

        while (!cellElementsNext.done) {
            let cell = cellElementsNext.value;

            if (Utils.hasCollission(bounds, cell.bounds)) {
                cells.push(cell);
            }

            cellElementsNext = cellElementsIt.next();
        }

        return cells;
    }

    act() {
        if (!this._layerImages || this._dynamic) {
            this._generateScenarioImages();
        }
    }

    getLayerImages() {
        return this._layerImages;
    }

    getBackgroundCanvas() {
        return this._layerImages[this._def.background.layer || 0];
    }

    _generateScenarioImages() {
        if (!this._layerImages) {
            this._layerImages = [];

            for (let i = 0; i < this._ctx._layers.length; i++) {
                this._layerImages.push(false);
            }
        }

        if (this._def.background) {
            this._refreshScenarioBackground();
        }

        let elementCellIt = this._elements.values();

        let elementCellNext = elementCellIt.next();

        while (!elementCellNext.done) {
            let cellData = elementCellNext.value;

            let actionData = cellData.sprite.getActionData(cellData.action);
            //TODO de momento, no hay animación para los sprites de las celdas.
            let curFrame = 0;

            let frameData = actionData.getFrameData(curFrame);

            let canvas = this._layerImages[cellData.layer ? cellData.layer : 0];

            if (canvas == false) {
                canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;

                this._layerImages[cellData.layer ? cellData.layer : 0] = canvas;
            }

            let ctx = canvas.getContext('2d');

            ctx.drawImage(cellData.sprite._img, 0, 0, cellData.sprite._spriteWidth, cellData.sprite._spriteHeight,
                cellData.bounds.x, cellData.bounds.y, cellData.bounds.w, cellData.bounds.h);

            elementCellNext = elementCellIt.next();
        }
    }

    _refreshScenarioBackground() {
        if (!this._layerImages) return;

        let canvas = this._layerImages[this._def.background.layer || 0];

        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            this._layerImages[this._def.background.layer || 0] = canvas;
        }

        let ctx = canvas.getContext('2d');

        if (this._bkgImage) {

            let drawedY = 0;

            while (drawedY < this.height) {
                let drawedX = 0;

                while (drawedX < this.width) {
                    ctx.drawImage(this._bkgImage, drawedX, drawedY);

                    drawedX += this._bkgImage.width;
                }

                drawedY += this._bkgImage.height;
            }
        } else if (this._def.background.color) {
            ctx.fillStyle = this._def.background.color;

            ctx.fillRect(0, 0, this.width, this.height);
        }
    }
}
