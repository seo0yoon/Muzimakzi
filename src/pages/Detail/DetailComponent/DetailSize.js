import React, { useState } from 'react';
import '../DetailComponent/DetailSize.scss';

const DetailSize = () => {
  const [sizeCount, setSizeCount] = useState();

  return (
    <div className="detailSize">
      <div className="sizeSelect">
        <div className="sizeSelectL">SIZE 선택</div>
        <img
          className="sizeSelectR"
          src="http://image.mujikorea.net/store/common/btn/btn_size_info_off.gif"
          alt="사이즈"
        />
      </div>
      <ul className="detatilSizeImg">
        {DETAIL_SIZE.map(({ id, thumbnail }) => {
          return (
            <li
              className={
                sizeCount === id ? 'detailSizeClicked' : 'detatilSizeListImg'
              }
              key={id}
            >
              <img
                className="detatilThumbnai"
                src={thumbnail}
                onClick={() => setSizeCount(id)}
                alt="thumbnail"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailSize;

const DETAIL_SIZE = [
  {
    id: 1,
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_S.gif',
  },
  {
    id: 2,
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_M.gif',
  },
  {
    id: 3,
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_L.gif',
  },
  {
    id: 4,
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_XL.gif',
  },
];
