import PropTypes from 'prop-types'
import { useState } from 'react'

const Couter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {counter}
      <button onClick={() => setCounter((x) => x + 1)}>Increase</button>
    </div>
  )
}

Couter.propTypes = {}

export default Couter
