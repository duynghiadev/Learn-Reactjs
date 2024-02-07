const initial = { count: 0, showText: true }

const reducer = (state, action) => {
  console.log('')
  console.log('state in reducer:', state, '👨‍💻 action in reducer:', action)
  console.log('')

  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, showText: state.showText }
    case 'ToggleText':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

export { initial, reducer }
