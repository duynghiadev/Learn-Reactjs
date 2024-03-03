function* loopRange(from, to) {
  for (let i = from; i <= to; i++) {
    console.log('i:', i)
    console.log('----------------')
    yield i
    console.log('finished yield i:', i)
    console.log('----------------')
  }

  console.log('to', to)
  console.log('to + 1:', to + 1)
  console.log('----------------')
  return to + 1
}

const range = loopRange(0, 10)

for (const i of range) {
  console.log('i in for:', i)
}

// Log from 0 to 10
