import React from 'react';
import '../DetailComponent/DetailImages.scss';

const DetailImage = ({ thumbnail_image_url }) => {
  return (
    <div>
      <div className="detailImage">
        <img className="mainImage" src={thumbnail_image_url} alt="썸네일" />
      </div>
    </div>
  );
};

export default DetailImage;
