class Color {
	constructor(name) {
		this.name = name;
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Red extends Color {
	constructor() {
		super('red');
	}
}

class White extends Color {
	constructor() {
		super('white');
	}
}

class Black extends Color {
	constructor() {
		super('black');
	}
}

module.exports = { Green, Blue, Red, White, Black };
