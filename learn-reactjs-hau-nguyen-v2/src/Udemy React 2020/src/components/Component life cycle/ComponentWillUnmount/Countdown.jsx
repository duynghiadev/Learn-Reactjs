import React, { PureComponent } from 'react'

class Countdown extends PureComponent {
  render() {
    const { currentSecond } = this.props
    return <p>{currentSecond}</p>
  }
}

export default Countdown
