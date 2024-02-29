import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/albumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Mùa xuân diệu kỳ',
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/7/9/a/579a5d8737da93e119af60d95d34b8d0.jpg",
        },
        {
            id: 2,
            name: 'Mùa hạ diệu kỳ',
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/7/9/a/579a5d8737da93e119af60d95d34b8d0.jpg",
        },
        {
            id: 3,
            name: 'Mùa thu diệu kỳ',
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/7/9/a/579a5d8737da93e119af60d95d34b8d0.jpg",
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;