import PropTypes from 'prop-types'
import './Pagination.scss'

const Pagination = (props) => {
  const { pagination, onPageChange } = props
  const { _page, _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }

  return (
    <div className='pagination'>
      <button
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
        className='pagination__button'
      >
        Prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
        className='pagination__button'
      >
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    _page: PropTypes.number.isRequired,
    _limit: PropTypes.number.isRequired,
    _totalRows: PropTypes.number.isRequired
  }).isRequired,
  onPageChange: PropTypes.func
}

Pagination.defaultProps = {
  onPageChange: null
}

export default Pagination
