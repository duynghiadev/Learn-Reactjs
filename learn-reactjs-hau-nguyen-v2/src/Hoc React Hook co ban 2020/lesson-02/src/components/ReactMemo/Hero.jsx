import PropTypes from 'prop-types'
import React from 'react'

Hero.propTypes = {
  name: PropTypes.string
}

Hero.defaultProps = {
  name: ''
}

function Hero(props) {
  const { name } = props
  console.log('Hero render:', name)

  return (
    <div>
      <h2>Hero name: {name}</h2>
    </div>
  )
}

export default React.memo(Hero)
