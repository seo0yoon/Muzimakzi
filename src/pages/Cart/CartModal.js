import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.scss';

const CartModal = ({ setIsOpenCartModal }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const closeCartModal = () => {
    setIsOpenCartModal(false);
  };

  return (
    <div className="cartModal">
      <div className="modalLayout" />
      <div className="modalContainer">
        <div className="modalHeader">
          <h3 className="modalTitle">장바구니에 담기 완료</h3>
          <div className="closeModal" />
          <div className="closeIcon" />
        </div>
        <div className="modalContent">
          <p className="contentTitle">
            <span>장바구니에 담기가 완료</span>되었습니다.
          </p>
        </div>
        <div className="contentCheck">지금 장바구니를 확인하겠습니까?</div>
        <div className="modalButtons">
          <button className="modalBtnL" onClick={goToCart}>
            장바구니 이동
          </button>
          <button className="modalBtnR" onClick={closeCartModal}>
            쇼핑 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
