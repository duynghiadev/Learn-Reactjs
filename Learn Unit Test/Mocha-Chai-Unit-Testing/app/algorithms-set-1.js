exports.isPrime = (number) => {
	if (!Number.isInteger(number)) return false;
	if (number < 2) return false;
	if (number == 2) return true;

	let divisor = 3;
	while (divisor < Math.sqrt(number)) {
  	if (number % divisor == 0) {
   		return false;
  	} else {
  		divisor += 2;
  	}
	}
	return true;
}

exports.primeFactors = (number) => {
	if (number == 0) return [-1];

	let factors = [];
  let divisor = 2;
	if (Number.isInteger(number)) {
		if (number < 0) number *= -1;
		
		while (number>1) {
    		if (number % divisor == 0) {
	       		factors.push(divisor);
	       		number = number/ divisor;
    		} else {
      			divisor++;
    		}
  		}
	}
	return factors;
}

exports.fibonacci = (number) => {
	if (!Number.isInteger(number) || number < 0) return null;
	if (number == 0) return 0;
	if (number <= 2) return 1;

	let lastElements = [0, 1];
	let result = 0;
	for (let i = 0; i < number - 1; i++) {
 		result = lastElements[0] + lastElements[1];
 		lastElements[0] = lastElements[1];
 		lastElements[1] = result;
	}
 	return result;
}

exports.greatestCommonDivisor = (a, b) => {
	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		return null;
	}

	if (a < 0) a *= -1;
	if (b < 0) b *= -1;
	
	// Euclidean algorithm
	if (b == 0) {
  	return a;
 	} else {
  	return exports.greatestCommonDivisor(b, a % b);
 	}
}

exports.removeDuplicate = (array) => {
	let exists = {};
	let result = [];
	let element = null;

	for (let i = 0; i < array.length; i++) {
		element = array[i];
		if (!exists[element]) {
	  		result.push(element);
	  		exists[element] = true;
		}
	}
	return result;
}

exports.mergeSortedArrays = (arrayA, arrayB) => {
	if (arrayA.length == 0) return arrayB;
	if (arrayB.length == 0) return arrayA;

	let result = [];
	let indexA = 0;
	let indexB = 0;
	let resultLength = arrayA.length + arrayB.length;

	for (let i = 0; i < resultLength; i++) {
		if (indexA == arrayA.length) {
			for (; indexB < arrayB.length; indexB++) {
				result.push(arrayB[indexB]);
			}
		} else if (indexB == arrayB.length) {
			for (; indexA < arrayA.length; indexA++) {
				result.push(arrayA[indexA]);
			}
		} else {
			if (arrayA[indexA] < arrayB[indexB]) {
				result.push(arrayA[indexA]);
				indexA++;
			} else {
				result.push(arrayB[indexB]);
				indexB++;
			}
		}
	}
  return result;
}

exports.stringReverse = (input) => {
	let result = "";
	input = input.toString();

	for (let i = input.length-1; i >= 0; i--) {
  	result += input[i];
	}
	return result;
}

// not covered by tests (too simple for it)
const isSeparator = (char) => {
	let allSeparators = " ,.:;!?¡¿&%/^*+-_<>\v\f\r\n\t\\";
	if (allSeparators.includes(char)) {
		return true;
	}
	return false;
}

exports.wordsCounter = (input) => {
	if (typeof input != "string") return 0;
	let tempString = input + " ";

	let counter = 0;
	for (let i = 0; i < input.length; i++) {
		if (!isSeparator(tempString[i]) && isSeparator(tempString[i+1])) {
			counter ++;
		}
	}
	return counter;
}

exports.tagsCollector = (input) => {
	if (typeof input != "string") return [];
	
	let tempString = input + " ";
	let exists = {};
	let result = [];
	let wordStarted = false;
	let currentWord = "";

	for (let i = 0; i < tempString.length; i++) {
		if (!isSeparator(tempString[i])) {
			currentWord += tempString[i];
		} else {
			if (currentWord != "" && !exists[currentWord]) {
				exists[currentWord] = true;
				result.push(currentWord);
			}
			currentWord = "";
		}
	}
	return result;
}

exports.firstNonRepeatChar = (input) => {
	if (typeof input == "number") {
		input = input.toString();
	} else if (typeof input != "string") {
		return null;
	}

	let charCount = {};

	for (let i = 0; i < input.length; i++) {
		if (charCount[input[i]]) {
			charCount[input[i]]++;
		} else {
			charCount[input[i]] = 1;
		}
	}

	for (let key in charCount) {
		if (charCount[key]==1) {
			return key;
		}
	}
	return null;
}
