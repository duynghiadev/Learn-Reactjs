'use strict';


/****
 * AQUÍ ESCOGES EL PERSONAJE DEFINIDO PARA PROBAR EN SpriteDataList.js
 */
var SpriteToTest = SPRITES[CONS.sprites.PRINCE];


/**
 * Metodos y clases de prueba
 */

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var theCanvas;
var ctx;

var inited = false;
var actionData;
var currentFrame = 0;
var paintMultiple = false;
var spritesforeachline = 1;
var spritesforeachrow = 1;


function setSpriteToTest(newSprite, action) {
    console.log(newSprite);
    SpriteToTest = SPRITES[newSprite];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    actionData = SpriteToTest.getActionData(action);
    currentFrame = 0;
}


function switchMultiplePaint() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    paintMultiple = !paintMultiple;
}


function changeActionData(action) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    actionData = SpriteToTest.getActionData(action);
    currentFrame = 0;
}


function initData() {

    changeActionData(CONS.spriteAction.QUIET_D);


    let dim = SpriteToTest.getSpriteSize();


    spritesforeachline = Math.floor(ctx.canvas.width / (dim.w + 20));

    spritesforeachrow = Math.ceil(actionData.getNumFrames() / spritesforeachline);
    inited = true;


}

function loopAction() {

    if (SpriteToTest.isReady()) {

        if (!inited) {
            initData();
        }

        let frameData = actionData.getFrameData(currentFrame);

        let xPos = 15;
        let yPos = 10;

        // Miramos de pintarlos separados
        if (paintMultiple) {
            let dim = SpriteToTest.getSpriteSize();

            xPos = 15 + (currentFrame % spritesforeachline) * (dim.w + 20);
            yPos = 10 + Math.floor(currentFrame / spritesforeachline) * (dim.h + 20);


            ctx.font = "12px Times New Roman";
            ctx.lineWidth = 2;
            ctx.fillText(currentFrame, xPos - 15, yPos + 15);


            //xPos = 10 + (currentFrame*200);
        } else {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        SpriteToTest.drawSprite(ctx, xPos, yPos, frameData, false, false, true);

        currentFrame++;
        if (currentFrame >= actionData.getNumFrames()) {
            currentFrame = 0;
        }

    }


    requestAnimFrame(loopAction);
}

function initPage() {
    theCanvas = document.getElementById('canvas');
    ctx = theCanvas.getContext("2d");
    theCanvas.width = CONFIG.SCREEN_WIDTH;
    theCanvas.height = CONFIG.SCREEN_HEIGHT;

    loopAction();
}

window.onload = initPage;
