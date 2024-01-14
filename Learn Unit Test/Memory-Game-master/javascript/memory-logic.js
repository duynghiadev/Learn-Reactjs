var ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var COLORS = ["Blue", "Red", "White", "Black", "Yellow", "Lime", "Aqua", "Green", "DarkViolet", "Bisque", "Grey", "Magenta", "SaddleBrown", "Orange", "DarkCyan"];

var memory_array = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var globalTimer;
var globalGameMode;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function startGame(){
	var options = document.getElementsByClassName('options');
	options[0].style.display = 'none';
	loadingSimulation = setInterval(progressSim, 25);
	// we need timeout to do not see 100% loaded picture from previous game
	setTimeout("document.getElementById('loader').style.display = 'block';", 75);
}

// detects how many tile will be on the game board
function readNumberOfElements(){
	var radioBtns = document.getElementsByName("difficulty");
	for(i = 0; i < radioBtns.length; i++) {
		if (radioBtns[i].checked){
			var numElements = radioBtns[i].value;
		}
	}
	return numElements;
}

// we are looking to the radio buttons to see what is the game mode
function readTypeOfElements(){
	var radioBtns = document.getElementsByName("mode");
	for(i = 0; i < radioBtns.length; i++) {
		if (radioBtns[i].checked){
			var typeElements = radioBtns[i].value;
		}
	}
	return typeElements;
}

// we are generating values of the tiles to know if it is a pair or not
function generateNumericData(numberOfElements){
	memory_array = [];
	for(i = 0; i < numberOfElements/2; i++) {
		memory_array.push(i+1);
		memory_array.push(i+1);
	}
	newBoard();
}

// we are generating characters to see them instead of numbers in chars mode
function generateCharData(numberOfElements){
	memory_array = [];
	for(i = 0; i < numberOfElements/2; i++) {
		memory_array.push(ALPHABET[i]);
		memory_array.push(ALPHABET[i]);
	}
	newBoard();
}

// generates a new board with data that was chosen from radio buttons
function newBoard(){
	var board = document.getElementById('memory_board');
	var timer = document.getElementById('timer');
	timer.style.display = 'block';
	board.style.display = 'block';
	board.style.height = 10 + memory_array.length/6 *132 + "px";

	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();

    // generate all pairs of tiles with correct values
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" class="flip3D" data-state="back" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')">';

		var frontBackground = '#FFF';
		var frontText = memory_array[i];
		if (globalGameMode == "colors") {
			frontBackground = COLORS[memory_array[i]-1];
			frontText = "\n";
		} else if (globalGameMode == "pictures") {
			frontBackground = 'url(images/paintings/picture_' + memory_array[i] + '.jpg) no-repeat';
			frontText = "\n";
		}

		output += '<div class="front card" style="background: ' + frontBackground + '">' + frontText + '</div>';
		output += '<div class="back card" style="background: url(images/tile_bg.jpg) no-repeat;"></div>';
		output += '</div>';
	}

	// put this tiles inside the board
	board.innerHTML = output;
	globalTimer = setInterval(setTime, 1000);
}

// click on the tiles handler
function memoryFlipTile(tile, val){
	// do nothing if this tile is already flipped or two tiles are already flipped
	if(tile.getAttribute("data-state") == "back" && memory_values.length < 2){
		flipToFront(tile);
		tile.setAttribute("data-state", "front");
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					winGameSubroutine();
				}
			} else {
				function flip2Back(){
				    // find tiles that are flipped
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.setAttribute("data-state", "back");
				    tile_2.setAttribute("data-state", "back");

				    // flip them back over
				    flipToBack(tile_1);
					flipToBack(tile_2);

				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 1500);
			}
		}
	}
}

// this is needed to show the winning message in a correct form
function timeFormatting() {
	var timeString = "";
	if (parseInt(totalSeconds/3600) == 1) {
		timeString += "1 hour, ";
	} else if (parseInt(totalSeconds/3600) != 0){
		timeString += parseInt(totalSeconds/3600) + " hours, ";
	}
	if (parseInt(totalSeconds/60)%60 == 1) {
		timeString += parseInt(totalSeconds/60)%60 + " minute, ";
	} else if (parseInt(totalSeconds/60)%60 != 0) {
		timeString += parseInt(totalSeconds/60)%60 + " minutes, ";
	}
	if (totalSeconds%60 == 1) {
		timeString += totalSeconds%60 + " second";
	} else if (totalSeconds%60 != 1) {
		timeString += totalSeconds%60 + " seconds";
	}
	return timeString;
}

// shows message and reload the game
function getNameFromPromt(time, size) {
  var result = prompt("Congratulations! Board cleared! \nYour time is " + time + " for " + size +
			" pairs. \n\nPlease enter your name to save your score and start a new game.");
	if (result === null) return null;
  var validName = true;
  if (!result.trim()) {
    validName = confirm("You have provided an empty name! \n\nPress \"Ok\" button if you want to submit an empty name.");
  }
  if (validName) {
    return result.trim();
  }
  return getNameFromPromt(time, size);
}

function winGameSubroutine() {
	var time = timeFormatting();
  var result = totalSeconds;
  var size = memory_array.length;
	clearInterval(globalTimer);
	totalSeconds = -1;
	setTime();
  var name = getNameFromPromt(time, size/2);
  if (name) {
    var key = guid();
    var value = JSON.stringify({ name, result, size, mode:globalGameMode});
    window.localStorage.setItem(key, value);
  }

	var board = document.getElementById('memory_board');
	var timer = document.getElementById('timer');
	var options = document.getElementsByClassName('options');

	// delete all tiles and show options menu
	board.innerHTML = "";
	board.style.display = 'none';
	timer.style.display = 'none';
	options[0].style.display = 'block';
}

// this variable is needed to make a flip for two tiles in a row
var flipsCounter = 0;
function flipToFront(tile) {
	var childBack = tile.children[0];
	var childFront = tile.children[1];
	// detects if this is first flip or the second
	if (flipsCounter % 2 == 0) {
		childFront.style.transition = "transform .5s linear 0s";
		childBack.style.transition = "transform .5s linear 0s";
		childBack.style.transform = "perspective( 600px ) rotateY( 0deg )";
		childFront.style.transform = "perspective( 600px ) rotateY( -180deg )";
	} else {
		// do additional flip (flip back) to be able to do the flip again
		childBack.style.transform = "perspective( 600px ) rotateY( 0deg )";
		childFront.style.transform = "perspective( 600px ) rotateY( -180deg )";
		childFront.style.transition = "transform .5s linear 0s";
		childBack.style.transition = "transform .5s linear 0s";
		childBack.style.transform = "perspective( 600px ) rotateY( 0deg )";
		childFront.style.transform = "perspective( 600px ) rotateY( -180deg )";
	}
	flipsCounter++;
}

// returns tile in the start stage
function flipToBack(tile) {
	var childBack = tile.children[0];
	var childFront = tile.children[1];
	childFront.style.transition = "transform .5s linear 0s";
	childBack.style.transition = "transform .5s linear 0s";
	childBack.style.transform = "perspective( 600px ) rotateY( 180deg )";
	childFront.style.transform = "perspective( 600px ) rotateY( 0deg )";
}
