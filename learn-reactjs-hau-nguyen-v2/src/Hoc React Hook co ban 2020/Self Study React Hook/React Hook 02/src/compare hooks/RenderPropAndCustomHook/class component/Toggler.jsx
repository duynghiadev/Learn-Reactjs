import { Component } from 'react'

class Toggler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleValue: props.initialValue
    }
    this.toggler = this.toggler.bind(this)
  }

  toggler() {
    this.setState((prevState) => ({
      toggleValue: !prevState.toggleValue
    }))
  }

  render() {
    return this.props.children(this.state.toggleValue, this.toggler)
  }
}

export default Toggler
