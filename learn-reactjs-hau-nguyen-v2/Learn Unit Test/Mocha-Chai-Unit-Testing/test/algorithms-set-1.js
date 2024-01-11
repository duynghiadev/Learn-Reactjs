var expect = require("chai").expect;
var beginner = require("../app/algorithms-set-1");


describe("SIMPLE ALGORITHMS FOR BEGGINERS", () => {
  // test 1       -------------------------------------------------------------------
  describe("Prime Numbers Checker", () => {
  	it("2 is a prime number", () => {
      // Setup
      const input = 2;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("2003.0 is a prime number", () => {
      // Setup
      const input = 2003.0;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("100003 is a prime number", () => {
      // Setup
      const input = 100003;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("0 is not a prime number", () => {
      // Setup
      const input = 0;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("1 is not a prime number", () => {
      // Setup
      const input = 1;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("1127843 is not a prime number", () => {
      // Setup
      const input = 1127843;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Negative numbers (-7) are not prime", () => {
      // Setup
      const input = -7;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Not integers (4.3) are not prime", () => {
      // Setup
      const input = 4.3;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
  });


  // test 2       -------------------------------------------------------------------
  describe("Prime Factors Finder", () => {
  	it("Prime divisors of 1", () => {
      // Setup
      const input = 1;
      const expected = [];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 5", () => {
      // Setup
      const input = 5;
      const expected = [5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 2310", () => {
      // Setup
      const input = 2310;
      const expected = [2, 3, 5, 7, 11];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 32", () => {
      // Setup
      const input = 32;
      const expected = [2, 2, 2, 2, 2];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 10.0", () => {
      // Setup
      const input = 10.0;
      const expected = [2, 5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 15.4", () => {
      // Setup
      const input = 15.4;
      const expected = [];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 0", () => {
      // Setup
      const input = 0;
      const expected = [-1];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of -60", () => {
      // Setup
      const input = -60;
      const expected = [2, 2, 3, 5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });


  // test 3       -------------------------------------------------------------------
  describe("Fibonacci Series", () => {
  	it("Element number 0", () => {
      // Setup
      const input = 0;
      const expected = 0;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 1", () => {
      // Setup
      const input = 1;
      const expected = 1;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 2", () => {
      // Setup
      const input = 2;
      const expected = 1;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 3", () => {
      // Setup
      const input = 3;
      const expected = 2;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 7", () => {
      // Setup
      const input = 7;
      const expected = 13;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 20", () => {
      // Setup
      const input = 20;
      const expected = 6765;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 50.0", () => {
      // Setup
      const input = 50.0;
      const expected = 12586269025;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number 10.5", () => {
      // Setup
      const input = 10.5;
      const expected = null;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Element number -3", () => {
      // Setup
      const input = -3;
      const expected = null;
      // Exercise
  		const result = beginner.fibonacci(input);
      // Verify
      expect(result).to.equal(expected);
    });
  });


  // test 4       -------------------------------------------------------------------
  describe("The Greates Common Divisor", () => {
  	it("GCD(a, b) = GCD(b, a)", () => {
  		for (let i = 0; i < 20; i++) {
  			const number1 = Math.floor(Math.random() * 1000);
  			const number2 = Math.floor(Math.random() * 1000);
  			const direct = beginner.greatestCommonDivisor(number1, number2);
			  const revers = beginner.greatestCommonDivisor(number2, number1);
      	expect(direct).to.equal(revers);
  		}
    });
    it("GCD(a, a) = a", () => {
    	for (let i = 0; i < 20; i++) {
    		const number = Math.floor(Math.random() * 1000);
	  		const result = beginner.greatestCommonDivisor(number, number);
	      expect(result).to.equal(number);
      }
    });
    it("GCD(a, 0) = a", () => {
    	for (let i = 0; i < 20; i++) {
    		const number = Math.floor(Math.random() * 1000);
	  		const result = beginner.greatestCommonDivisor(number, 0);
	      expect(result).to.equal(number);
      }
    });
    it("GCD(a, 1) = 1", () => {
    	for (let i = 0; i < 20; i++) {
    		const number = Math.floor(Math.random() * 1000);
	  		const result = beginner.greatestCommonDivisor(number, 1);
	      expect(result).to.equal(1);
      }
    });
    it("GCD(n, n+1) = 1", () => {
    	for (let i = 0; i < 20; i++) {
    		const number = Math.floor(Math.random() * 1000);
	  		const result = beginner.greatestCommonDivisor(number, number + 1);
	      expect(result).to.equal(1);
      }
    });
    it("GCD(not integer, not integer) = null", () => {
    	for (let i = 0; i < 20; i++) {
    		const number1 = Math.random() * 1000;
    		const number2 = Math.random() * 1000;
	  		const result = beginner.greatestCommonDivisor(number1, number2);
	      expect(result).to.equal(null);
      }
    });
    it("GCD(not integer, integer) = null", () => {
    	for (let i = 0; i < 20; i++) {
    		const number1 = Math.random() * 1000;
    		const number2 = Math.floor(Math.random() * 1000);
	  		const result = beginner.greatestCommonDivisor(number1, number2);
	      expect(result).to.equal(null);
      }
    });
    it("GCD(12, 30) = 6", () => {
      // Setup
      const input1 = 12;
      const input2 = 30;
      const expected = 6;
      // Exercise
  		const result = beginner.greatestCommonDivisor(input1, input2);
      // Verify
      expect(result).to.equal(expected);
    });
    it("GCD(-84, 184) = 4", () => {
      // Setup
      const input1 = -84;
      const input2 = 184;
      const expected = 4;
      // Exercise
  		const result = beginner.greatestCommonDivisor(input1, input2);
      // Verify
      expect(result).to.equal(expected);
    });
    it("GCD(4553, 8164) = 157", () => {
      // Setup
      const input1 = 4553;
      const input2 = 8164;
      const expected = 157;
      // Exercise
  		const result = beginner.greatestCommonDivisor(input1, input2);
      // Verify
      expect(result).to.equal(expected);
    });
    it("GCD(-1000, -20) = 20", () => {
      // Setup
      const input1 = -1000;
      const input2 = -20;
      const expected = 20;
      // Exercise
  		const result = beginner.greatestCommonDivisor(input1, input2);
      // Verify
      expect(result).to.equal(expected);
    });
    it("GCD(223, 331) = 1", () => {
      // Setup
      const input1 = 223;
      const input2 = 331;
      const expected = 1;
      // Exercise
  		const result = beginner.greatestCommonDivisor(input1, input2);
      // Verify
      expect(result).to.equal(expected);
    });
  });


  // test 5       -------------------------------------------------------------------
  describe("Removing Duplicates", () => {
  	it("[] => []", () => {
      // Setup
      const input = [];
      const expected = [];
      // Exercise
  		const result = beginner.removeDuplicate(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  	it("[1, 1, 1, 1] => [1]", () => {
      // Setup
      const input = [1, 1, 1, 1];
      const expected = [1];
      // Exercise
  		const result = beginner.removeDuplicate(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[1, 1, 1, 1, 2, 2, 2, 2] => [1, 2]", () => {
      // Setup
      const input = [1, 1, 1, 1, 2, 2, 2, 2];
      const expected = [1, 2];
      // Exercise
  		const result = beginner.removeDuplicate(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("20 randomized tests", () => {
    	for (let i = 0; i < 20; i++) {
        // Setup
    		const length = Math.floor(Math.random() * 10);
    		const checker = [];
    		const testCase = [];
        // Creates two arrays with unique elements
    		for (let j = 0; j < length; j++) {
				  checker.push(j);
				  testCase.push(j);
    		}
        // Adds to one of arrays several duplicates
    		for (let j = 0; j < length; j++) {
    			const randomIndex = Math.floor(Math.random() * length);
				  testCase.push(checker[randomIndex]);
    		}
        // Ecercise
	  		const result = beginner.removeDuplicate(testCase);
        // Verify
	      expect(result).to.deep.equal(checker);
      }
    });
  });


  // test 6       -------------------------------------------------------------------
  describe("Merge Sorted Arrays", () => {
    it("A + B => B + A", () => {
      for (let i = 0; i < 20; i++) {
        const arrayA = [];
        const arrayB = [];
        const lengthA = Math.floor(Math.random() * 10);
        const lengthB = Math.floor(Math.random() * 10);
        // Creates a random array
        for (let j = 0; j < lengthA; j++) {
          arrayA.push(Math.random() * lengthA);
        }
        // Creates a random array
        for (let j = 0; j < lengthB; j++) {
          arrayB.push(Math.random() * lengthB);
        }
        // Exercise
        const direct = beginner.mergeSortedArrays(arrayA, arrayB);
        const revers = beginner.mergeSortedArrays(arrayB, arrayA);
        // Verify
        expect(direct).to.deep.equal(revers);
      }
    });
    it("A + [] => A", () => {
      for (let i = 0; i < 20; i++) {
        const array = [];
        const length = Math.floor(Math.random() * 10);
        // Creates a random array
        for (let j = 0; j < length; j++) {
          array.push(Math.random() * length);
        }
        // Exercise
        const result = beginner.mergeSortedArrays(array, []);
        // Verify
        expect(result).to.deep.equal(array);
      }
    });
    it("[] + [] => []", () => {
      // Setup
      const input1 = [];
      const input2 = [];
      const expected = [];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[1, 2] + [3, 4] => [1, 2, 3, 4]", () => {
      // Setup
      const input1 = [1, 2];
      const input2 = [3, 4];
      const expected = [1, 2, 3, 4];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[1, 3, 5] + [2, 4] => [1, 2, 3, 4, 5]", () => {
      // Setup
      const input1 = [1, 3, 5];
      const input2 = [2, 4];
      const expected = [1, 2, 3, 4, 5];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[1, 2, 4, 5] + [3] => [1, 2, 3, 4, 5]", () => {
      // Setup
      const input1 = [1, 2, 4, 5];
      const input2 = [3];
      const expected = [1, 2, 3, 4, 5];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[1, 2, 3, 4, 5] + [1, 2, 3, 4, 5] => [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]", () => {
      // Setup
      const input1 = [1, 2, 3, 4, 5];
      const input2 = [1, 2, 3, 4, 5];
      const expected = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("[-3] + [-11, -2, 13.4, 13.5] => [-11, -3, -2, 13.4, 13.5]", () => {
      // Setup
      const input1 = [-3];
      const input2 = [-11, -2, 13.4, 13.5];
      const expected = [-11, -3, -2, 13.4, 13.5];
      // Exercise
  		const result = beginner.mergeSortedArrays(input1, input2);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });


  // test 7       -------------------------------------------------------------------
  describe("String Reverse Algorithm", () => {
    it("'' => ''", () => {
      // Setup
      const input = "";
      const expected = "";
      // Exercise
  		const result = beginner.stringReverse(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("'a' => 'a'", () => {
      // Setup
      const input = "a";
      const expected = "a";
      // Exercise
  		const result = beginner.stringReverse(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("'ab' => 'ba'", () => {
      // Setup
      const input = "ab";
      const expected = "ba";
      // Exercise
  		const result = beginner.stringReverse(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("'1234,56789' => '98765,4321'", () => {
      // Setup
      const input = "1234,56789";
      const expected = "98765,4321";
      // Exercise
  		const result = beginner.stringReverse(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 12345 (integer) => 54321 (String) ", () => {
      // Setup
      const input = 12345;
      const expected = "54321";
      // Exercise
  		const result = beginner.stringReverse(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });


  // test 8       -------------------------------------------------------------------
  describe("Words Counter", () => {
    it(" numbers  => 0 ", () => {
      // Setup
      const input = 2;
      const expected = 0;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" array  => 0 ", () => {
      // Setup
      const input = [1, 2, 3];
      const expected = 0;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" object  => 0 ", () => {
      // Setup
      const input = {"a": "value of a", "b": "value of b"};
      const expected = 0;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" ''  => 0 ", () => {
      // Setup
      const input = "";
      const expected = 0;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" ' , '  => 0 ", () => {
      // Setup
      const input = " , ";
      const expected = 0;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello'  => 1 ", () => {
      // Setup
      const input = "Hello";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" '   Hello'  => 1 ", () => {
      // Setup
      const input = "   Hello";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello   '  => 1 ", () => {
      // Setup
      const input = "Hello   ";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" '   Hello   '  => 1 ", () => {
      // Setup
      const input = "   Hello   ";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" ' !   Hello   '  => 1 ", () => {
      // Setup
      const input = " !   Hello   ";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" '   Hello   !'  => 1 ", () => {
      // Setup
      const input = "   Hello   !";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" ' !  Hello  ! '  => 1 ", () => {
      // Setup
      const input = " !  Hello  ! ";
      const expected = 1;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello, world!'  => 2 ", () => {
      // Setup
      const input = "Hello, world!";
      const expected = 2;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello,world'  => 2 ", () => {
      // Setup
      const input = "Hello,world";
      const expected = 2;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello world...'  => 2 ", () => {
      // Setup
      const input = "Hello world...";
      const expected = 2;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Hello this big and wanderful world!'  => 6 ", () => {
      // Setup
      const input = "Hello this big and wanderful world!";
      const expected = 6;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" '  Hello   this big,and wanderful    world !'  => 6 ", () => {
      // Setup
      const input = "  Hello   this big,and wanderful    world !";
      const expected = 6;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it(" 'Цей символ з'явився в Юнікоді: \u2602'  => 6 ", () => {
      // Setup
      const input = "Цей символ з'явився в Юнікоді: \u2602";
      const expected = 6;
      // Exercise
  		const result = beginner.wordsCounter(input);
      // Verify
      expect(result).to.equal(expected);
    });
  });


  // test 9       -------------------------------------------------------------------
  describe("Tags Collector", () => {
    it(" numbers  => [] ", () => {
      // Setup
      const input = 2;
      const expected = [];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" array  => [] ", () => {
      // Setup
      const input = [1, 2, 3];
      const expected = [];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" object  => [] ", () => {
      // Setup
      const input = {"a": "value of a", "b": "value of b"};
      const expected = [];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" ''  => [] ", () => {
      // Setup
      const input = "";
      const expected = [];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" '  ,  '  => [] ", () => {
      // Setup
      const input = '  ,  ';
      const expected = [];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello'  => ['Hello'] ", () => {
      // Setup
      const input = "Hello";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" '   Hello'  => ['Hello'] ", () => {
      // Setup
      const input = "   Hello";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello   '  => ['Hello'] ", () => {
      // Setup
      const input = "Hello   ";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" '   Hello   '  => ['Hello'] ", () => {
      // Setup
      const input = "   Hello   ";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" ' !   Hello   '  => ['Hello'] ", () => {
      // Setup
      const input = " !   Hello   ";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" '   Hello   !'  => ['Hello'] ", () => {
      // Setup
      const input = "   Hello   !";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" ' !  Hello  ! '  => ['Hello'] ", () => {
      // Setup
      const input = " !  Hello  ! ";
      const expected = ["Hello"];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello, world!'  => ['Hello', 'world'] ", () => {
      // Setup
      const input = "Hello, world!";
      const expected = ['Hello', 'world'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello,world'  => ['Hello', 'world'] ", () => {
      // Setup
      const input = "Hello,world";
      const expected = ['Hello', 'world'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello world...'  => ['Hello', 'world'] ", () => {
      // Setup
      const input = "Hello world...";
      const expected = ['Hello', 'world'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello this big and wanderful world!'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", () => {
      // Setup
      const input = "Hello this big and wanderful world!";
      const expected = ['Hello', 'this', 'big', 'and', 'wanderful', 'world'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" '  Hello   this big,and wanderful    world !'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", () => {
      // Setup
      const input = "  Hello   this big,and wanderful    world !";
      const expected = ['Hello', 'this', 'big', 'and', 'wanderful', 'world'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'Hello, hello, Hello, Hello, hello, hello, hello'  => ['Hello', 'hello'] ", () => {
      // Setup
      const input = "Hello, hello, Hello, Hello, hello, hello, hello";
      const expected = ['Hello', 'hello'];
      // Exercise
  		const result = beginner.tagsCollector(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });


  // test 10       -------------------------------------------------------------------
  describe("The First Non Repeating Char", () => {
    it(" ''  => null ", () => {
      // Setup
      const input = "";
      const expected = null;
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'aaa'  => null ", () => {
      // Setup
      const input = "aaa";
      const expected = null;
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'aabb'  => null ", () => {
      // Setup
      const input = "aabb";
      const expected = null;
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'a'  => a ", () => {
      // Setup
      const input = "a";
      const expected = "a";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'ab'  => a ", () => {
      // Setup
      const input = "ab";
      const expected = "a";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'aabbcddee'  => c ", () => {
      // Setup
      const input = "aabbcddee";
      const expected = "c";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'abcdedcba'  => e ", () => {
      // Setup
      const input = "abcdedcba";
      const expected = "e";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 'the quick brown fox jumps then quickly blow air'  => f ", () => {
      // Setup
      const input = "the quick brown fox jumps then quickly blow air";
      const expected = "f";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 123321 (number)  =>  null", () => {
      // Setup
      const input = 123321;
      const expected = null;
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it(" 12321 (number)  => 3 ", () => {
      // Setup
      const input = 12321;
      const expected = "3";
      // Exercise
  		const result = beginner.firstNonRepeatChar(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });

});
