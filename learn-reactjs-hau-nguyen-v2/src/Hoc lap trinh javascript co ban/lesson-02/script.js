// -----------------------------------
// HỌC REDUCE() QUA CÁC VÍ DỤ ĐƠN GIẢN
// -----------------------------------

// Trong cái mớ hàm này
// for...i, for...of
// forEach
// filter
// map
// ...
// Cái hàm dễ diên nhất chính là reduce() :P
// Hàm này nó làm gì?
// Lặp qua các phần tử của mảng,
// tính toán và trả về 1 KQ cuối cùng

// Hàm tính tổng viết bằng for...of
const sumFor = (numberList) => {
  let sum = 0

  for (const number of numberList) {
    const newSum = sum + number
    // để sử dụng ở bước sau
    sum = newSum
  }

  return sum
}
console.log(sumFor([1, 2, 3, 4, 5]))

// 1. Xác định giá trị khởi tạo
// 2. Xác định công thức với KQ của bước trước đó
// --
// 0
// result = prevResult + current

const sumReduce = (numberList) => {
  // return numberList.reduce((resultFromLastStep, curValue) => { }, 0);
  return numberList.reduce((sum, number) => {
    const newSum = sum + number
    return newSum
  }, 0)

  // [1, 2, 3]
  // sum = 0, number = 1 --> 0 + 1 = 1
  // sum = 1, number = 2 --> 1 + 2 = 3
  // sum = 3, number = 3 --> 3 + 3 = 6
}
console.log(sumReduce([1, 2, 3, 4, 5]))

// Find the first longest word in list
// Input:   ['love', 'easy', 'frontend']
// Output:  frontend
const findTheLongestWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return null

  return wordList.reduce((theLongestWord, currentWord) => {
    let resultWord = theLongestWord.length > currentWord.length ? theLongestWord : currentWord

    console.log('theLongestWord:', theLongestWord)
    console.log('currentWord:', currentWord)
    console.log('Result word:', resultWord)
    console.log('-------------------------')

    return resultWord
  }, wordList[0])
}
const wordList = ['love', 'easy', 'frontend']
console.log(findTheLongestWord(wordList))

// Viết hàm để chuyển đối mảng thành object như bên dưới sử dụng reduce()
// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
//
// is converted to
//
// const itemMap = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
//
// to use later as itemMap.key1, O(1)
// instead of look up in itemList with id = key1, 0(n)
const arrayToObject = (itemList) => {
  return itemList.reduce((itemMap, item) => {
    itemMap[item.id] = item.value
    return itemMap
  }, {})
}

const itemList = [
  { id: 'key1', value: 'Superman' },
  { id: 'key2', value: 'Wonder Woman' },
  { id: 'key3', value: 'Spider man' }
]
console.log(arrayToObject(itemList))

// Tóm lại
// Mình có thể dùng reduce() nếu như gặp bài toán
// lặp qua một mảng -> xử lý gì đó -> trả về một kết quả cuối cùng.
// Vd như tìm min, max, sum, ...

// BÀI TẬP
// 1. Viết hàm findMin(numberList) sử dụng reduce()
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.

// HAPPY CODING!!! :)
// PS: Nếu các bạn vẫn còn chưa rõ phần nào thì hãy bình luận bên dưới nhé.
// Nếu đã thông suốt thì làm bài tập thôi ;)
