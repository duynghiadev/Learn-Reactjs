import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Countdown extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentSecond: 0
    }
  }

  componentDidMount() {
    const { seconds } = this.props
    console.log('seconds from componentDidMount:', seconds)
    console.log('this.countdown:', this.countdown)
    this.countdown(seconds)
  }

  countdown(seconds) {
    if (seconds === -1) return

    // Update current second state
    this.setState({ currentSecond: seconds })

    // Continue to count after 1s
    setTimeout(() => {
      this.countdown(seconds - 1)
    }, 1000)
  }

  render() {
    const { currentSecond } = this.state

    return <p className='countdown'>{currentSecond}</p>
  }
}

Countdown.propTypes = {
  seconds: PropTypes.number.isRequired
}

export default Countdown
