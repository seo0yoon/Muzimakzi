import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemCell from './components/CartItemCell';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const carts = useSelector(state => state.cart);

  let priceSum = 0;
  let shippingFee = 3000;

  const handleAdd = () => {
    const addQty = cartItems.map(cartItem => {
      if (cartItem.id === cartItem.id && cartItem.count < 10) {
        return { ...cartItem, count: cartItem.count + 1 };
      } else return cartItem;
    });
    setCartItems(addQty);
  };

  const handleMin = () => {
    const addMin = cartItems.map(cartItem => {
      if (cartItem.id === cartItem.id && cartItem.count > 1) {
        return { ...cartItem, count: cartItem.count - 1 };
      } else return cartItem;
    });
    setCartItems(addMin);
  };

  console.log(cartItems);

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

  const handleShoppingClick = () => {
    alert(
      '주문하시려는 상품 정보가 제대로 전달되지 않았습니다. 다시 시도해주세요.'
    );
  };

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
              cartItems.map((cartItem, id) => {
                priceSum += cartItem.price * cartItem.count;
                shippingFee = priceSum > 30000 && 3000;
                return (
                  <CartItemCell
                    key={id}
                    cartItem={cartItem}
                    getCartData={getCartData}
                    handleAdd={handleAdd}
                    handleMin={handleMin}
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
                <span>{parseInt(priceSum).toLocaleString()}원</span>
              </div>
              <div className="cartShippingFeeTotal">
                <span>배송비 : </span>
                <span>{parseInt(shippingFee).toLocaleString()}원</span>
              </div>
            </div>
            <div className="devider" />
            <div className="cartTotal">
              <div className="cartTotalPrice">
                <span>총 결제 예정 금액 : </span>
                <span>
                  <span className="totalPriceText">
                    {parseInt(priceSum + shippingFee).toLocaleString()}
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
            <button className="goToShopping" onClick={handleShoppingClick}>
              계속 쇼핑하기
            </button>
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
