// First run npm install
// Run tests: npm test
let chai = require('chai')
let assert = require('chai').assert
let mocha = require('mocha')
let describe = mocha.describe
let expect = chai.expect

chai.should()

let Fibonacci = require('./fibonacci')

describe('Fibonacci', () => {
  describe('test the VALID return values of the Fibonacci method', () => {
    let fib
    beforeEach(() => {
      fib = new Fibonacci()
    })
    it('should return 0', () => {
      expect(fib.fibonacci(0)).to.eql([0])
    })
    it('should return 0, 1', () => {
      expect(fib.fibonacci(1)).to.eql([0, 1])
    })
    it('should return 0, 1, 1', () => {
      expect(fib.fibonacci(2)).to.eql([0, 1, 1])
    })
    it('should return 0, 1, 1, 2', () => {
      expect(fib.fibonacci(3)).to.eql([0, 1, 1, 2])
    })
    it('should return 0, 1, 1, 2, 3', () => {
      expect(fib.fibonacci(4)).to.eql([0, 1, 1, 2, 3])
    })
    it('should return 0, 1, 1, 2, 3, 5', () => {
      expect(fib.fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5])
    })
    it('should return 0, 1, 1, 2, 3, 5, 8', () => {
      expect(fib.fibonacci(6)).to.eql([0, 1, 1, 2, 3, 5, 8])
    })
    it('should return 0, 1, 1, 2, 3, 5, 8, 13', () => {
      expect(fib.fibonacci(7)).to.eql([0, 1, 1, 2, 3, 5, 8, 13])
    })
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21', () => {
      expect(fib.fibonacci(8)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21])
    })
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
      expect(fib.fibonacci(9)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    })
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55', () => {
      expect(fib.fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

  describe('test the INVALID return values of the Fibonacci method', () => {
    let fib
    beforeEach(() => {
      fib = new Fibonacci()
    })
    it('should not return 0', () => {
      expect(fib.fibonacci(0)).to.not.eql([])
    })
    it('should not return 0', () => {
      expect(fib.fibonacci(0)).to.not.eql([-1])
    })
    it('should not return 0', () => {
      expect(fib.fibonacci(0)).to.not.eql([1])
    })

    it('should not return 1', () => {
      expect(fib.fibonacci(1)).to.not.eql([])
    })
    it('should not return 1', () => {
      expect(fib.fibonacci(1)).to.not.eql([-1])
    })
    it('should not return 1', () => {
      expect(fib.fibonacci(1)).to.not.eql([0])
    })
    it('should not return 1', () => {
      expect(fib.fibonacci(1)).to.not.eql([1])
    })

    it('should not return 2', () => {
      expect(fib.fibonacci(2)).to.not.eql([])
    })
    it('should not return 2', () => {
      expect(fib.fibonacci(2)).to.not.eql([1])
    })
    it('should not return 2', () => {
      expect(fib.fibonacci(2)).to.not.eql([0, 1])
    })

    it('should not return 2', () => {
      expect(fib.fibonacci(2)).to.not.eql([0, 1, 1, 2])
    })
    it('should not return 2', () => {
      expect(fib.fibonacci(2)).to.not.eql([2])
    })
  })
  describe('test the data type of the Parameter of the Fibonacci method', () => {
    let fib
    beforeEach(() => {
      fib = new Fibonacci()
    })
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci('2')).to.throw('The Parameter must be an Integer!')
    })
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(['2'])).to.throw('The Parameter must be an Integer!')
    })
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(1.1)).to.throw('The Parameter must be an Integer!')
    })
    it('should NOT throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(2)).to.not.throw('The Parameter must be an Integer!')
    })
  })

  describe('test the value of the Parameter of the Fibonacci method', () => {
    let fib
    beforeEach(() => {
      fib = new Fibonacci()
    })
    it('should throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(-1)).to.throw('The Parameter must be positive!')
    })
    it('should throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(-100)).to.throw('The Parameter must be positive!')
    })
    it('should not throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(0)).to.not.throw('The Parameter must be positive!')
    })
    it('should not throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(1)).to.not.throw('The Parameter must be positive!')
    })
    it('should not throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(2)).to.not.throw('The Parameter must be positive!')
    })
  })
})
