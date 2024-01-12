const objectConvert = {
  key1: 'keyVal1',
  key2: 'keyVal2',
  key3: 'keyVal3',
  key4: 'keyVal4'
}

const objectToArrayConvert = (obj) => {
  return Object.keys(obj).reduce((arrayRes, current) => {
    arrayRes.push({ id: current, value: obj[current] })
    return arrayRes
  }, [])
}

console.log(objectToArrayConvert(objectConvert))
