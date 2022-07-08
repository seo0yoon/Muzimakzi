import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItemCell from './components/CartItemCell';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const carts = useSelector(state => state.cart);

  let priceSum = 0;
  let shippingFee = 3000;

  const getCartData = () => {
    /* 백엔드 API */
    // fetch('http://10.58.7.109:8000/carts', {
    //   headers: {
    //     Authorization: localStorage.getItem('TOKEN'),
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     data.message === 'NO ITEM IN CART' || setCartItems(data.message);
    //   });
    // fetch('/data/CartData.json')
    //   .then(response => response.json())
    //   .then(data => setCartItems(data));
  };

  useEffect(() => {
    getCartData();
    setCartItems(carts);
  }, []);

  return (
    <div className="cart">
      <div className="pageContainer">
        <div className="orderStep">
          <img src="images/cartpage/step1.gif" alt="step1" />
        </div>
        <div className="benefitInfo">
          <div className="customerInfo">
            <strong>고객</strong>님의 혜택정보
          </div>
          <div className="customerBenefit">쿠폰: 0 point: 0</div>
        </div>
        <div className="orderGuide">
          <LogInUserNotification />
        </div>
        <table className="cartList">
          <thead>
            <tr>
              <th scope="col" width="110">
                상품 이미지
              </th>
              <th scope="col" width="250">
                상품정보
              </th>
              <th scope="col" width="120">
                판매가 / 혜택
              </th>
              <th scope="col" width="70">
                수량
              </th>
              <th scope="col" width="100">
                소계
              </th>
              <th scope="col">주문 / 저장</th>
            </tr>
          </thead>
          <tbody className="cartListBody">
            {cartItems ? (
              cartItems.map((cartItem, idx) => {
                priceSum += cartItem.price * cartItem.quantity;
                shippingFee = priceSum > 30000 && 0;
                return (
                  <CartItemCell
                    key={idx}
                    cartItem={cartItem}
                    getCartData={getCartData}
                  />
                );
              })
            ) : (
              <EmptyCart />
            )}
          </tbody>
        </table>
        <div className="cartCalc">
          <div className="cartSum">
            <div className="cartSumResult">
              <div className="cartProductTotal">
                <span>상품금액 합계 : </span>
                <span>{priceSum}원</span>
              </div>
              <div className="cartShippingFeeTotal">
                <span>배송비 합계 :</span>
                <span>{shippingFee}원</span>
              </div>
            </div>
            <div className="devider" />
            <div className="cartTotal">
              <div className="cartTotalPrice">
                <span>총 결제 예정 금액 : </span>
                <span>
                  <span className="totalPriceText">
                    {priceSum + shippingFee}
                  </span>
                  원
                </span>
              </div>
            </div>
          </div>
          <div className="cartResultBtn">
            <div>
              <span>선택한 상품</span>
              <button className="deleteBtn">X 삭제하기</button>
            </div>
            <button className="goToShopping">계속 쇼핑하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const EmptyCart = () => {
  return (
    <tr>
      <td colSpan={7}>
        <div className="cartData">
          <p>
            <b>장바구니에 저장하신 상품이 없습니다.</b>
          </p>
        </div>
      </td>
    </tr>
  );
};

const LogInUserNotification = () => {
  return (
    <p>
      고객님! 장바구니상품은 30일간 보관됩니다. 상품을 장기간 보관하시려면
      [위시리스트 담기]를 클릭해주세요.
    </p>
  );
};
