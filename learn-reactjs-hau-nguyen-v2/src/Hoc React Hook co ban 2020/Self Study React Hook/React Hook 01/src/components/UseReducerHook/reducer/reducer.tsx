interface TypeInitialState {
  red: number
  green: number
  blue: number
}

type Action = {
  type: string
}

const initialState = {
  red: 0,
  green: 0,
  blue: 0
}
console.log('initialState from reducer:', initialState)

const limitRGB = (num: number) => {
  return num < 0 ? 0 : num > 255 ? 255 : num
}

const reducer = (state: TypeInitialState, action: Action) => {
  console.log('state in reducer:', state)
  console.log('action in reducer:', action)

  switch (action.type) {
    case 'UP_RED':
      return {
        ...state,
        red: limitRGB(state.red + 50)
      }
    case 'DOWN_RED':
      return {
        ...state,
        red: limitRGB(state.red - 50)
      }
    case 'UP_GREEN':
      return {
        ...state,
        green: limitRGB(state.green + 50)
      }
    case 'DOWN_GREEN':
      return {
        ...state,
        green: limitRGB(state.green - 50)
      }
    case 'UP_BLUE':
      return {
        ...state,
        blue: limitRGB(state.blue + 50)
      }
    case 'DOWN_BLUE':
      return {
        ...state,
        blue: limitRGB(state.blue - 50)
      }

    default:
      return initialState
  }
}

export { initialState, reducer }
