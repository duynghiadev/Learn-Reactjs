const item = {
  key1: 'HTML',
  key2: 'CSS',
  key3: 'JS'
}

const objectToArray = (item) => {
  console.log('items all:', item)
  console.log('------------------------')

  return Object.keys(item).reduce((itemList, key) => {
    console.log('itemList:', itemList)
    console.log('key:', key)
    console.log('------------------------')

    itemList.push({
      id: key,
      value: item[key]
    })
    return itemList
  }, [])
}

console.log('finished:', objectToArray(item))
