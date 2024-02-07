import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Child = ({ returnComments }) => {
  useEffect(() => {
    console.log('FUNCTION WAS CALLED')
  }, [returnComments])

  return (
    <div>
      <>{returnComments('Duynghiadev')}</>
    </div>
  )
}

Child.propTypes = {
  returnComments: PropTypes.func.isRequired
}

export default Child
