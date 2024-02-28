const randomColor = (currentColor) => {
  const COLOR_LIST = ['red', 'green', 'blue', 'yellow']
  // random 0 -> 3
  const currentIndex = COLOR_LIST.indexOf(currentColor)
  let newIndex = currentIndex

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 4)
  }

  console.log(COLOR_LIST[newIndex])
  return COLOR_LIST[newIndex]
}

export { randomColor }
