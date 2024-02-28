import './Pagination.scss'
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const { pagination, onPageChange } = props
  const { _page, _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit) // 51 / 10 = 5.1 -> 6

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
}

Pagination.defaultProps = {
  onPageChange: null
}

export default Pagination
