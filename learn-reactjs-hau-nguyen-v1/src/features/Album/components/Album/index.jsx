import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;

  return (
    <div className="album album--active album--special">
      <div className="album__thumbnail album__thumbnail--active">
        <img className="album__image" src={album.thumbnail} alt={album.name} />

        {/* Other control */}
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
