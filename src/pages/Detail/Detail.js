import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [detatilColor, setDetailColor] = useState([]);

  const handleColorClick = e => {
    console.log(e.target.value);
    setDetailColor(e.target.value);
  };

  return (
    <div className="detail">
      <div className="detailWrap">
        <div className="imageWrap">
          <img
            className="bigImg"
            src="/images/listpage/남성니트1.jpg"
            alt="니트"
          />
          <div className="smallImgWrap">
            <img
              className="smallImg"
              src="/images/listpage/남성니트2.jpg"
              alt="니트"
            />
            <img
              className="smallImg"
              src="/images/listpage/남성니트3.jpg"
              alt="니트"
            />
            <img
              className="smallImg"
              src="/images/listpage/남성니트4.jpg"
              alt="니트"
            />
          </div>
        </div>
        <div className="detailBox">
          <div className="detailTextWrap">
            <div className="detailTitle">울 혼방 더블 페이스 하이넥 스웨터</div>
            <div className="detailPrice">
              <div className="detailPriceL">판매가</div>
              <div className="detailPriceR">
                19,900
                <span>원</span>
              </div>
            </div>
            <div className="detailtext">
              산뜻한 촉감을 만들기 위해 강하게 꼬인 면사를 사용했습니다.
              <br />
              오가닉 코튼을 사용했습니다.
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
              <div className="colorB">
                <input
                  type="radio"
                  value="1"
                  checked={detatilColor === '1'}
                  onChange={handleColorClick}
                />
                <label>Black</label>
              </div>
              <div className="colorW">
                <input
                  type="radio"
                  value="2"
                  checked={detatilColor === '2'}
                  onChange={handleColorClick}
                />
                <label>White</label>
              </div>
              <div className="colorG">
                <input
                  type="radio"
                  value="3"
                  checked={detatilColor === '3'}
                  onChange={handleColorClick}
                />
                <label>Grey</label>
              </div>
              <div className="colorN">
                <input
                  type="radio"
                  value="4"
                  checked={detatilColor === '4'}
                  onChange={handleColorClick}
                />
                <label>Navy</label>
              </div>
            </div>
          </div>

          <div className="detailSize">
            <div className="sizeSelect">
              <div className="sizeSelectL">SIZE 선택</div>
              <img
                className="sizeSelectR"
                src="http://image.mujikorea.net/store/common/btn/btn_size_info_off.gif"
                alt="사이즈"
              />
            </div>
            <div className="detatilSizeImg">
              <img
                src="http://image.mujikorea.net/goodsProp/chip/chip_SIZE_S.gif"
                alt="s"
              />
              <img
                src="http://image.mujikorea.net/goodsProp/chip/chip_SIZE_M.gif"
                alt="m"
              />
              <img
                src="http://image.mujikorea.net/goodsProp/chip/chip_SIZE_L.gif"
                alt="l"
              />
              <img
                src="http://image.mujikorea.net/goodsProp/chip/chip_SIZE_XL.gif"
                alt="xl"
              />
            </div>
          </div>

          <div className="detailAmount">
            <div className="amountSelect">수량선택</div>
            <div className="amountBtn">
              <button className="amountDown">-</button>
              <span>0</span>
              <button className="amountUp">+</button>
            </div>
          </div>
          <div className="detailPut">
            <button className="wishBtn">WISH</button>
            <button className="basketBtn">장바구니</button>
            <button className="buyBtn">바로구매</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

const DETAIL_COLOR = [
  {
    id: 0,
    color: 'black',
  },
  {
    id: 1,
    color: 'white',
  },
  {
    id: 2,
    color: 'grey',
  },
  {
    id: 3,
    color: 'navy',
  },
];

const DETAIL_SIZE = [
  {
    id: 0,
    thumbnail: 'http://image.mujikorea.net/goodsProp/chip/chip_SIZE_XS.gif',
  },
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
