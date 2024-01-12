// BÀI TẬP
// 1. Viết hàm findMin(numberList) sử dụng reduce()
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.

// 1
function findMin(numberList) {
  if (!numberList || numberList.length === 0) {
    return undefined
  }

  return numberList.reduce((min, current) => {
    return current < min ? current : min
  }, numberList[0])
}

// 2
function findMaxEvenNumber(numberList) {
  if (!numberList || numberList.length === 0) {
    return undefined
  }

  return numberList.reduce((maxEven, current) => {
    if (current % 2 === 0 && current > maxEven) {
      return current
    }
    return maxEven
  }, -Infinity)
}

/**
 * 3. Viết hàm convertObjectToArray để chuyển đổi một object thành một mảng các cặp key-value:
 *
 * => Trong bài này ta viết 3 cách khác nhau, để có cách nhìn rõ hơn
 */
function convertObjectToArray_1(obj) {
  if (!obj || typeof obj !== 'object') {
    return []
  }

  return Object.entries(obj)
}

const convertObjectToArray_2 = (obj) => {
  return Object.entries(obj).reduce((itemList, [key, value]) => {
    itemList.push({ id: key, value })
    return itemList
  }, [])
}

const convertObjectToArray_3 = (obj) => {
  return Object.entries(obj).reduce((itemList, [key, value]) => {
    itemList.push([key, value])
    return itemList
  }, [])
}

const numbers = [3, 1, 7, 4, 10, 8, 5]

console.log(findMin(numbers))
console.log(findMaxEvenNumber(numbers))

const myObject = { name: 'John', age: 30, occupation: 'Developer' }

console.log(convertObjectToArray_1(myObject))
console.log('------------------------')

console.log(convertObjectToArray_2(myObject))
console.log('------------------------')

console.log(convertObjectToArray_3(myObject))
console.log('------------------------')
