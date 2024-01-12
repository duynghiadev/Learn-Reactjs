// Câu 1:
function doSomethingCool(number, obj) {
  number = 1500
  obj.value = 2500
}
const a = 1000
const b = { value: 2000 }
doSomethingCool(a, b)
console.log(a + b.value) // in ra bao nhiêu?

// Câu 2:
function doSomethingGreat(obj, arr) {
  obj.value = 3500
  arr.push(obj.value)
}
const a2 = { value: 1500 }
const b2 = [1000]
b2.push(a2.value)
doSomethingGreat(a2, b2)
console.log(b2) // in ra cái gì?
