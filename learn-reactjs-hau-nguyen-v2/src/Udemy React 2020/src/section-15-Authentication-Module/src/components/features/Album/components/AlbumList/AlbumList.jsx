import PropTypes from 'prop-types'
import './style.scss'
import Album from '../Album/Album'

const AlbumList = (props) => {
  const { albumList } = props

  return (
    <ul className='album-list'>
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  )
}

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired
}

export default AlbumList
