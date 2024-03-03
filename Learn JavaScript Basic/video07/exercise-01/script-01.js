function* myGenerator() {
  yield 1
  yield 2
  yield 3
}

const generator = myGenerator()

console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next()) // { value: 2, done: false }
console.log(generator.next()) // { value: 3, done: false }
console.log(generator.next()) // { value: undefined, done: true }
