const fib = (number: number, depth: number = 0): number => {
  const indentation = '  '.repeat(depth)
  const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m']
  const resetColor = '\x1b[0m'

  const color = colors[depth % colors.length]
  const logMessage = `${color}${indentation}Calculating fib(${number})${resetColor}`

  console.log(logMessage)

  if (number <= 1) {
    console.log(`${color}${indentation}Base case reached: fib(${number}) = 1${resetColor}`)
    return 1
  }

  const result = fib(number - 1, depth + 1) + fib(number - 2, depth + 1)

  console.log(`${color}${indentation}fib(${number}) = ${result}${resetColor}`)
  console.log('----------------------------')
  return result
}

export default fib
