// 3. Chuyển đổi một object thành một mảng sử dụng reduce():

const objectToArray = (object) => {
  if (typeof object !== 'object' || object === null) return []

  return Object.keys(object).reduce((array, key) => {
    array.push({ id: key, value: object[key] })
    console.log('item:', array[array.length - 1]) // Log the last item in the array

    return array
  }, [])
}

const itemMap = {
  key1: 'Superman',
  key2: 'Wonder Woman',
  key3: 'Spider man'
}

console.log('type 1:', objectToArray(itemMap))

console.log('----------------------------------------')

const objectToArray_1 = (object) => {
  if (typeof object !== 'object' || object === null) return []

  const array = Object.entries(object).map(([id, value]) => ({ id, value }))
  array.forEach((item, index) => {
    console.log(`Item ${index + 1}:`, item)
  })

  return array
}

const itemMap_1 = {
  key1: 'Superman',
  key2: 'Wonder Woman',
  key3: 'Spider man'
}

console.log('type 2:', objectToArray_1(itemMap_1))
