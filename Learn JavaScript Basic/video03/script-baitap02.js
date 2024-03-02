// Câu 2:

function doSomethingGreat(obj, arr) {
  obj.value = 3500
  arr.push(obj.value)
}

const a2 = { value: 1500 }
const b2 = [1000]
b2.push(a2.value)

doSomethingGreat(a2, b2) // a2: 3500, b2 = [1000, 1500, 3500]

console.log(`a2: ${a2.value}, b2: ${b2}`) // Output: a2: 3500, b2: 1000,1500,3500

const resultB2 = b2.reduce((acc, val) => {
  return acc + val
}, 0)

// Perform addition on a2.value and result from b2 elements
const sum = a2.value + resultB2

console.log(`a2.value is ${a2.value} + b2 is ${resultB2} => sum: ${sum}`) // Output: a2.value + b2: 6000
