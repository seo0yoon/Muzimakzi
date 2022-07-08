import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../redux/store';
import DetailBtn from './DetailComponent/DetailBtn';
import DetailSize from './DetailComponent/DetailSize';
import './Detail.scss';

const Detail = () => {
  const [clickColor, setClickColor] = useState();
  const [clickCount, setClickCount] = useState(0);
  const [clickColorChange, setClickColorChange] = useState(0);
  const [detailData, setDetailDate] = useState([]);
  const [sizeCount, setSizeCount] = useState();

  const dispatch = useDispatch();
  const { id } = useParams();

  const findItem = detailData?.product?.find(item => {
    return item.id === parseInt(id);
  });

  const bigColorImg = {
    0: `${findItem?.thumbnail_image_url}`,
    1: `${findItem?.small_thumnail_image[0].thumbnail_url}`,
    2: `${findItem?.small_thumnail_image[1].thumbnail_url}`,
    3: `${findItem?.small_thumnail_image[2].thumbnail_url}`,
    4: `${findItem?.small_thumnail_image[3].thumbnail_url}`,
  };

  console.log(
    id,
    findItem?.name,
    sizeCount,
    clickColor,
    clickCount,
    findItem?.price,
    bigColorImg[clickColorChange]
  );

  const handleCountDownClick = () => {
    if (clickCount > 0) setClickCount(clickCount - 1);
  };

  const handleCountUpClick = () => {
    if (clickCount < 10) {
      setClickCount(clickCount + 1);
    } else {
      alert('10개까지만 선택 가능합니다.');
    }
  };

  const getFetch = () => {
    fetch('/data/newDetial.json')
      .then(res => res.json())
      .then(data => {
        setDetailDate(data);
      });
  };

  const createCartItem = () => {
    const data = {
      id,
      poduct_name: findItem?.name,
      size: sizeCount,
      color: clickColor,
      count: clickCount,
      price: findItem?.price,
      thumbnail: bigColorImg[clickColorChange],
    };
    console.log('button');
    dispatch(cartActions.create(data));
  };

  useEffect(() => {
    getFetch();
  }, [id]);

  const str = `${findItem?.description}`;
  const brSplit = str.split('<br>');

  return (
    <div className="detail">
      <div className="detailWrap">
        <div className="imageWrap">
          <img
            className="bigImg"
            src={bigColorImg[clickColorChange]}
            alt="니트"
          />
          <ul className="smallImgWrap">
            {findItem?.small_thumnail_image.map(({ id, thumbnail_url }) => {
              return (
                <li
                  className="smallImgLi"
                  key={id}
                  onClick={() => setClickColorChange(id)}
                >
                  <img
                    className="smallImg"
                    src={thumbnail_url}
                    alt="thumbnail"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="detailBox">
          <div className="detailTextWrap">
            <div className="detailTitle">{findItem?.name}</div>
            <div className="detailPrice">
              <div className="detailPriceL">판매가</div>
              <div className="detailPriceR">
                {Math.floor(findItem?.price).toLocaleString()}
                <span>원</span>
              </div>
            </div>
            <div className="detailtext">
              {brSplit?.map((brLine, index) => {
                return (
                  <div key={index}>
                    {brLine}
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="detailColor">
            <div className="colorSelect">
              <div className="colorSelectL">COLOR 선택</div>
              <img
                className="colorSelectR"
                src="http://image.mujikorea.net/store/common/btn/icon_option_reset_off.gif"
                alt="컬러"
              />
            </div>
            <div className="colorWrap">
              {DETAIL_COLOR.map(({ id, color }) => {
                return (
                  <div className="colorB" key={id}>
                    <input
                      type="radio"
                      value={color}
                      checked={clickColor === color}
                      onChange={() => setClickColor(color)}
                    />
                    <label>{color}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <DetailSize sizeCount={sizeCount} setSizeCount={setSizeCount} />
          <div className="detailAmount">
            <div className="amountSelect">수량선택</div>
            <div className="amountBtn">
              <button onClick={handleCountDownClick} className="amountDown">
                -
              </button>
              <span>{clickCount}</span>
              <button onClick={handleCountUpClick} className="amountUp">
                +
              </button>
            </div>
          </div>
          <DetailBtn createCartItem={createCartItem} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const DETAIL_COLOR = [
  {
    id: 1,
    color: 'Purple',
  },
  {
    id: 2,
    color: 'Blue',
  },
  {
    id: 3,
    color: 'Orange',
  },
  {
    id: 4,
    color: 'Green',
  },
];
