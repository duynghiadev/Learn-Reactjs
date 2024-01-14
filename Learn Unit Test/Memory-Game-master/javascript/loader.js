var canvasContext = document.getElementById('loader-canvas').getContext('2d');
var amountLoaded = 0;
var start = 4.72;
var canvasWidth = canvasContext.canvas.width;
var canvasHeight = canvasContext.canvas.height;
var difference;

function progressSim(){
	difference = ((amountLoaded / 100) * Math.PI*2*10).toFixed(2);
	canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
	canvasContext.lineWidth = 30;
	canvasContext.fillStyle = '#4DCB6D';
	canvasContext.strokeStyle = "#4DCB6D";
	canvasContext.textAlign = 'center';
	canvasContext.font = '30px sans-serif';
	canvasContext.fillText(amountLoaded+'%', canvasWidth*.5, canvasHeight*.5+2, canvasWidth);
	canvasContext.beginPath();
	canvasContext.arc(124, 125, 100, start, difference/10+start, false);
	canvasContext.stroke();
	if(amountLoaded >= 100){
  	document.getElementById('loader').style.display = 'none';
		amountLoaded = 0;
		difference = 0;
		clearTimeout(loadingSimulation);
	  var numElements = readNumberOfElements();
		globalGameMode = readTypeOfElements();

		if (globalGameMode == "characters") {
			generateCharData(numElements);
		} else {
			generateNumericData(numElements);
		}
	}
	amountLoaded++;
}

var loadingSimulation;
