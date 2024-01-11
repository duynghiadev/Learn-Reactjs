class Fibonacci {
  fibonacci(num) {
    if (!Number.isInteger(num)) {
      throw new Error('The Parameter must be an Integer!')
    }
    if (num < 0) {
      throw new Error('The Parameter must be positive!')
    } else if (num == 0) {
      return [0]
    } else if (num == 1) {
      return [0, 1]
    } else if (num >= 2) {
      let arr = [0, 1]
      for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
      }
      return arr
    }
  }
}

module.exports = Fibonacci
