import PropTypes from 'prop-types'
import './style.scss'

const Album = (props) => {
  const { album } = props

  return (
    <div className='album'>
      <div className='album__thumbnail'>
        <img src={album.thumbnailUrl} alt={album.name} />

        {/* Other controls */}
      </div>
      <p className='album__name'>{album.name}</p>
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.object.isRequired
}

export default Album
