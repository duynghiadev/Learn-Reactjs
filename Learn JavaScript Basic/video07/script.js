function* generateId() {
  yield 1

  console.log('Continue to run')
  yield 2

  console.log('Resume')
  return 3
}

const newId = generateId()
newId.next() // { value: 1, done: false }
newId.next() // { value: 2, done: false }
newId.next() // { value: 3, done: true }
