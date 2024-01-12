const inputArray = [
  { quantity: 1, productId: 10 },
  { quantity: 1, productId: 3 },
  { quantity: 2, productId: 3 }
]

const resultArray = inputArray.reduce((accumulator, current) => {
  const existingItem = accumulator.find((item) => item.productId === current.productId)

  if (existingItem) {
    // Nếu sản phẩm đã tồn tại, tăng quantity
    existingItem.quantity += current.quantity
  } else {
    // Nếu sản phẩm chưa tồn tại, thêm vào mảng accumulator
    accumulator.push({ quantity: current.quantity, productId: current.productId })
  }

  return accumulator
}, [])

console.log(resultArray)
