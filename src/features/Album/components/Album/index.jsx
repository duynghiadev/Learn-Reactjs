import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Album(props) {
  const { album } = props;

  return (
    <div className="album">
      <div className="album_thumbnail">
        <img src={album.thumbnail} alt={album.name} />

        {/* Other control */}
      </div>
      <p className="album_name">{album.name}</p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
