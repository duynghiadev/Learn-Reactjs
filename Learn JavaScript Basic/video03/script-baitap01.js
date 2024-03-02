// Câu 1:
function doSomethingCool(number, obj) {
  number = 1500
  obj.value = 2500
  console.log(`number in function doSomethingCool: ${number}`)
}

const a = 1000
const b = { value: 2000 }

doSomethingCool(a, b)

console.log(`a: ${a}, b: ${b.value}`) // a: 1000, b: 2500
console.log(a + b.value) // in ra bao nhiêu?
