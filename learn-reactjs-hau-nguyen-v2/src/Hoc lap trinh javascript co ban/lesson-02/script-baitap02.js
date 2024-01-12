const itemMap = {
  key1: 'Superman',
  key2: 'Wonder Woman',
  key3: 'Spider man'
}

const objectToArray1 = (obj) =>
  Object.entries(obj).reduce((itemList, [key, value]) => {
    itemList.push({ id: key, value })
    return itemList
  }, [])

const objectToArray2 = (obj) =>
  Object.keys(obj).reduce((itemList, key) => [...itemList, { id: key, value: obj[key] }], [])

console.log(objectToArray1(itemMap))
console.log(objectToArray2(itemMap))
