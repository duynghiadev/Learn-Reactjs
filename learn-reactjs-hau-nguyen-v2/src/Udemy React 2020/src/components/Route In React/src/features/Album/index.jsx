import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList/AlbumList'

const AlbumFeature = (props) => {
  const albumList = [
    {
      id: 1,
      name: 'Guitar V-POP',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/1/a/841a4e3fbfd78f89f7b13e9f48737a45.jpg'
    },
    {
      id: 2,
      name: 'Rap Việt Cực Chất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/1/c/e/a1ce1ab6ccc1b7d79cff6829234c598e.jpg'
    },
    {
      id: 3,
      name: 'Catchy Tune',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/0/f/c/b0fc5e9d54909c378abe4826dcd12978.jpg'
    }
  ]

  return (
    <div>
      <h2>
        Có thể bạn sẽ thích đấy 🎵🎵🎵
        <AlbumList albumList={albumList} />
      </h2>
    </div>
  )
}

AlbumFeature.propTypes = {}

export default AlbumFeature
