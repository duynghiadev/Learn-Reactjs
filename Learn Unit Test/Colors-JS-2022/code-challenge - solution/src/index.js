const { getColor } = require('./apiMock');
const { Green, Blue, Red, White, Black } = require('./classes');

// console.log("Step 0");
colors();

function colors() {
	// console.log("Step 1");
	// console.log("DEBUG: ", process.argv)
	const green = process.argv[2];
	const blue = process.argv[3];
	const red = process.argv[4];
	const white = process.argv[5];
	const black = process.argv[6];
	const colorOrder = process.argv[7];
	const type = process.argv[8];

	getColors(green, blue, red, white, black, JSON.parse(colorOrder), type, async function (colors) {
		// console.log("Step 3");
		colors = await Promise.all(colors);
		// console.log("Step 4");

		if (type === "async") {
			let hexColors = [];
			let rgbColors = [];
			colors.forEach(color => color ? hexColors.push(color.HEX) : null);
			colors.forEach(color => color ? rgbColors.push(color.RGB) : null);
			console.log(hexColors);
			console.log(rgbColors);

		} else if (type === "sync") {
			colors.forEach((color)=> {
				if (color) {
					console.log(color.HEX, color.RGB);
				}
			});
		}
	});
}

async function getColors(green, blue, red, white, black, order, type, callback) {
	// console.log("Step 2");
	const colors = [];

	if (green === 'true'){
		green = new Green();
		colors[order.indexOf(green.name)] = getColor(green.name);
	}
	if (blue === 'true') {
		blue = new Blue();
		colors[order.indexOf(blue.name)] = getColor(blue.name);
	}
	if (red === 'true') {
		red = new Red();
		colors[order.indexOf(red.name)] = getColor(red.name);
	}
	if (white === 'true') {
		white = new White();
		colors[order.indexOf(white.name)] = getColor(white.name);
	}
	if (black === 'true') {
		black = new Black();
		colors[order.indexOf(black.name)] = getColor(black.name);
	}

	// console.log("Step 2.1");
	callback(colors);
	// console.log("Step 3.1");
	return colors;
}

/*
To run application
In the src folder run:
node index.js true true true true true '["red", "green", "blue", "white", "black"]' async
node index.js true true true true true '["red", "green", "blue", "white", "black"]' sync
node index.js true true true true true '["white", "black", "red", "green", "blue"]' sync
*/
