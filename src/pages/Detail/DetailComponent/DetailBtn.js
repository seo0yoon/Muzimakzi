import React from 'react';
import '../DetailComponent/DetailBtn.scss';

const DetailBtn = ({ createCartItem }) => {
  const handleAlertCart = () => {
    alert('서비스 준비중 입니다.');
  };

  return (
    <div className="detailBtn">
      <button className="wishBtn">WISH</button>
      <button
        className="basketBtn"
        onClick={() => {
          createCartItem();
        }}
      >
        장바구니
      </button>
      <button className="buyBtn" onClick={handleAlertCart}>
        바로구매
      </button>
    </div>
  );
};

export default DetailBtn;
