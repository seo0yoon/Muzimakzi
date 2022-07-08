import React from 'react';

import '../DetailComponent/DetailBtn.scss';

const DetailBtn = ({ createCartItem }) => {
  const handleAlert = () => {
    alert('장바구니에 담기가 완료되었습니다.');
  };

  return (
    <div className="detailBtn">
      <button className="wishBtn">WISH</button>
      <button
        className="basketBtn"
        onClick={() => {
          createCartItem();
          handleAlert();
        }}
      >
        장바구니
      </button>
      <button className="buyBtn">바로구매</button>
    </div>
  );
};

export default DetailBtn;
