import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../DetailComponent/DetailBtn.scss';

const DetailBtn = ({ createCartItem, openCartModal }) => {
  const navigate = useNavigate();

  const goToCart = clickColor => {
    navigate('/cart');
  };

  return (
    <div className="detailBtn">
      <button className="wishBtn">WISH</button>
      <button
        className="basketBtn"
        onClick={() => {
          createCartItem();
          openCartModal();
        }}
      >
        장바구니
      </button>
      <button
        className="buyBtn"
        onClick={() => {
          goToCart();
        }}
      >
        바로구매
      </button>
    </div>
  );
};

export default DetailBtn;
