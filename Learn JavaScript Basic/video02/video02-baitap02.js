// 2. Tìm số chẵn lớn nhất trong một mảng sử dụng reduce():

const findMaxEvenNumber = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return null

  return numberList.reduce((maxEven, current) => {
    if (current % 2 === 0 && current > maxEven) {
      return current
    }
    return maxEven
  }, Number.NEGATIVE_INFINITY)
}

console.log(findMaxEvenNumber([3, 1, 4, 6, 2, 5])) // Output: 6
