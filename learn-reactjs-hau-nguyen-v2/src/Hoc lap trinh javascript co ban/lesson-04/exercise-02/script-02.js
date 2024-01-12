/**
 * - In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of the variables that were in scope at the time the closure was created. Closures allow a function to access and manipulate variables from an outer function, even after the outer function has finished executing.
 *
 * - Here's a simple example to illustrate closures:
 */
/**
 * In this example, outerFunction declares a variable outerVariable and a nested function innerFunction. outerFunction then returns innerFunction. When outerFunction is invoked and assigned to closureExample, it creates a closure because innerFunction retains access to the outerVariable even though outerFunction has finished executing. When closureExample is called later, it still has access to outerVariable.
 */
function outerFunction() {
  let outerVariable = 'I am from the outer function'

  function innerFunction() {
    console.log(outerVariable)
  }

  return innerFunction
}

const closureExample = outerFunction()
closureExample() // Output: "I am from the outer function"
