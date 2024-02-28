import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

const PostFiltersForm = (props) => {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  const handleSearchTermChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (!onSubmit) return

    // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
    // SET -- 300 --> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
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

PostFiltersForm.propType = {
  onSubmit: PropTypes.func
}

PostFiltersForm.defaultProps = {
  onSubmit: null
}

export default PostFiltersForm
