import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func
}

PostFilterForm.defaultProps = {
  onSubmit: null
}

function PostFilterForm(props) {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  function handleSearchTermChange(e) {
    const value = e.target.value
    setSearchTerm(value)

    if (!onSubmit) return

    if (typingTimeoutRef.current) {
      console.log('typingTimeoutRef.current before ⏰:', typingTimeoutRef.current)

      clearTimeout(typingTimeoutRef.current)

      console.log('typingTimeoutRef.current after 🕘:', clearTimeout(typingTimeoutRef.current))
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      }
      onSubmit(formValues)
    }, 300)
  }

  return (
    <form>
      <input type='text' value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  )
}

export default PostFilterForm
