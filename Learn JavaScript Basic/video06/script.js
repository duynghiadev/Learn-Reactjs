const counter = (function (initialCount) {
  // private variable (biến này không thể truy cập từ bên ngoài)
  let count = initialCount

  function getValue() {
    return count
  }

  function increase() {
    return count++
  }

  function decrease() {
    return count--
  }

  // private method
  function reset() {
    count = initialCount
  }

  return {
    getValue,
    increase,
    decrease
    // reset // It must be called in the return for it to be used
  }
})(100)

console.log(counter.increase())
console.log(counter.increase())
console.log(counter.decrease())
console.log(counter.getValue()) // 101
console.log(counter.count) // undefined
counter.reset() // error: counter.reset is not a function

// console.log(counter.getValue()) // reset to initial value --> 100
