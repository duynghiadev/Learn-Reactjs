import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ChildModify = ({ returnComments }) => {
  const [additionalText, setAdditionalText] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [clickCount, setClickCount] = useState(0)

  const handleButtonClick = () => {
    setClickCount(clickCount + 1)

    if (clickCount === 1) {
      setAdditionalText('Clicked once! ')
    } else if (clickCount === 2) {
      setAdditionalText('Clicked twice! ')
      setShowButton(!showButton)
      setClickCount(0)
    }
  }

  useEffect(() => {
    console.log('FUNCTION WAS CALLED')
  }, [returnComments])

  return (
    <div>
      <>
        {returnComments('Duynghiadev')}
        {showButton && <button onClick={handleButtonClick}>Click me</button>}
        <p>{additionalText}</p>
        <p>{clickCount}</p>
      </>
    </div>
  )
}

ChildModify.propTypes = {
  returnComments: PropTypes.func.isRequired
}

export default ChildModify
