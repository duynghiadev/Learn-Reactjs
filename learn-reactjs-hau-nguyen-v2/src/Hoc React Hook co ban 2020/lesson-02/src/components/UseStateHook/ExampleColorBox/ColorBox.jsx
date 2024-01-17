import { PureComponent } from 'react'

// Class Component
class ColorBox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shape: 'square',
      color: 'deeppink'
    }
  }

  handleBoxClick = () => {
    this.setState({ color: 'green' })
  }

  render() {
    const { color, shape } = this.state

    return (
      <div className='color-box'>
        <button type='button' style={{ background: color }} onClick={this.handleBoxClick}>
          Class Component
        </button>
      </div>
    )
  }
}

export default ColorBox
