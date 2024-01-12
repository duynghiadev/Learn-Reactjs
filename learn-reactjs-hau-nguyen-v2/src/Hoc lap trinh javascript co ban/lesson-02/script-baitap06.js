// BÀI TẬP
// 1. Viết hàm findMin(numberList) sử dụng reduce()
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.

//Đáp án bài tập trong video
const arr1 = [5, 7, 3, 67, 333, 1, 45, 10, 99, 2, 4, 6, 8, 9]

//Câu 1:
console.log(
  arr1.reduce((acc, curr) => {
    return acc < curr ? acc : curr
  })
)

//Câu 2:

console.log(
  arr1.reduce((acc, curr) => {
    return curr > acc && curr % 2 === 0 ? curr : acc
  }, -Infinity)
)

//Câu 3:

const item = {
  key1: 'HTML',
  key2: 'CSS',
  key3: 'JS'
}

const objectToArray = Object.keys(item).reduce((itemList, key) => {
  itemList.push({
    id: key,
    value: item[key]
  })
  return itemList
}, [])

console.log(objectToArray)
