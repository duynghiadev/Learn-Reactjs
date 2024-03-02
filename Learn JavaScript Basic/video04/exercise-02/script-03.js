/**
 * Another common use of closures is in creating private variables in JavaScript:
 */
/**
 * In this example, createCounter returns a function that has access to the count variable. Every time the returned function is called, it increments the count and logs the updated value. The count variable is protected and cannot be directly accessed or modified from outside the createCounter function, demonstrating encapsulation through closures.
 */
function createCounter() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}

const counter = createCounter()
counter() // Output: 1
counter() // Output: 2
counter() // Output: 3
