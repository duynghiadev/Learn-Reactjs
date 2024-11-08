import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import './style.scss'

class ColorBox1 extends PureComponent {
  render() {
    const { color } = this.props
    return <div style={{ backgroundColor: color }} className='color-box'></div>
  }
}

ColorBox1.propTypes = {
  color: PropTypes.string.isRequired
}

export default ColorBox1
