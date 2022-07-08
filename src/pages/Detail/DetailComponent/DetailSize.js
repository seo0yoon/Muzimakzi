import React from 'react';
import '../DetailComponent/DetailSize.scss';

const DetailSize = ({ sizeCount, setSizeCount }) => {
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
        {DETAIL_SIZE.map(({ id, thumbnail, name }) => {
          return (
            <li
              className={
                sizeCount === name ? 'detailSizeClicked' : 'detatilSizeListImg'
              }
              key={id}
            >
              <img
                className="detatilThumbnai"
                src={thumbnail}
                onClick={() => setSizeCount(name)}
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
    name: 'S',
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_S.gif',
  },
  {
    id: 2,
    name: 'M',
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_M.gif',
  },
  {
    id: 3,
    name: 'L',
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_L.gif',
  },
  {
    id: 4,
    name: 'XL',
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_XL.gif',
  },
];
