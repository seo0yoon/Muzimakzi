import React from 'react';
import '../DetailComponent/DetailBtn.scss';

const DetailBtn = () => {
  return (
    <div className="detailBtn">
      <button className="wishBtn">WISH</button>
      <button className="basketBtn">장바구니</button>
      <button className="buyBtn">바로구매</button>
    </div>
  );
};

export default DetailBtn;
