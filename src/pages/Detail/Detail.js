import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailBtn from './DetailComponent/DetailBtn';
import DetailSize from './DetailComponent/DetailSize';
import './Detail.scss';

const Detail = () => {
  const [clickColor, setClickColor] = useState();
  const [clickCount, setClickCount] = useState(0);
  const [clickColorChange, setClickColorChange] = useState(0);
  const [detailData, setDetailDate] = useState([]);
  const { id } = useParams();

  const findItem = detailData?.product?.find(item => {
    return item.id === parseInt(id);
  });
  console.log(findItem);

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

  useEffect(() => {
    getFetch();
  }, [id]);

  const bigColorImg = {
    0: `${findItem?.thumbnail_image_url}`,
    1: `${findItem?.small_thumnail_image[0].thumbnail_url}`,
    2: `${findItem?.small_thumnail_image[1].thumbnail_url}`,
    3: `${findItem?.small_thumnail_image[2].thumbnail_url}`,
    4: `${findItem?.small_thumnail_image[3].thumbnail_url}`,
  };

  const str = `${findItem?.description}`;
  const brSplit = str.split('<br>');

  return (
    <div className="detail">
      <div className="detailWrap">
        <div className="imageWrap">
          <img
            className="bigImg"
            src={bigColorImg[clickColorChange]} //대괄호로 객체 접근
            alt="니트"
          />
          <ul className="smallImgWrap">
            {DETAIL_SMALL_IMG.map(({ id, img }) => {
              return (
                <li
                  className="smallImgLi"
                  key={id}
                  onClick={() => setClickColorChange(id)}
                >
                  <img className="smallImg" src={img} alt="thumbnail" />
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
                      checked={clickColor === id}
                      onChange={() => setClickColor(id)}
                    />
                    <label>{color}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <DetailSize />
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
          <DetailBtn />
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

const DETAIL_SMALL_IMG = [
  {
    id: 1,
    img: '/images/menswear/작은니트2.jpg',
  },
  {
    id: 2,
    img: '/images/menswear/작은니트3.jpg',
  },
  {
    id: 3,
    img: '/images/menswear/작은니트4.jpg',
  },
  {
    id: 4,
    img: '/images/menswear/작은니트5.jpg',
  },
];
