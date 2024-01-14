/**
 * asyncOperation1 and asyncOperation2 are placeholder functions simulating asynchronous operations. You need to replace them with your actual asynchronous operations.
 *
 * The runAsyncGenerator function has been modified to correctly iterate through the generator using generator.next() and await.
 *
 * The while (!result.done) loop ensures that the generator continues to execute until it is done.
 *
 * The final result is logged to the console.
 */

function asyncOperation1() {
  // Placeholder for your asynchronous operation 1
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result from asyncOperation1')
    }, 1000) // Simulating an asynchronous operation with a delay of 1 second
  })
}

function asyncOperation2(value) {
  // Placeholder for your asynchronous operation 2
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Result from asyncOperation2 with ${value}`)
    }, 1000) // Simulating an asynchronous operation with a delay of 1 second
  })
}

async function* asyncGenerator() {
  const result1 = yield asyncOperation1()
  const result2 = yield asyncOperation2(result1)
  return result2
}

async function runAsyncGenerator() {
  const generator = asyncGenerator()
  let result = await generator.next()

  while (!result.done) {
    result = await generator.next(result.value)
  }

  console.log('result.value:', result.value)
}

runAsyncGenerator()
