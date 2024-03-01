// 1. Tìm giá trị nhỏ nhất trong một mảng sử dụng reduce():

const findMin = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return null

  return numberList.reduce((min, current) => {
    return current < min ? current : min
  }, numberList[0])
}

const arrayFindMin = [3, 1, 4, 2, 5]
console.log(findMin(arrayFindMin))
