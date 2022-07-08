import React, { useState } from 'react';
import './CartItemCell.scss';
const CartItemCell = ({
  cartItem: { name, size, color, price, thumbnail, count, id },
  getCartData,
}) => {
  const [itemCount, setItemCount] = useState(count);

  const sum = price * count;

  const handleCount = e => {
    const { value } = e.target;
    setItemCount(value);
  };

  const handleChangeCount = () => {
    alert('수량을 변경하시겠습니까?');
    alert('변경되었습니다.');
  };

  //백엔드 API
  // const deleteItem = () => {
  //   fetch(`http://10.58.7.109:8000/carts?cart_id=${cart_id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('TOKEN'),
  //     },
  //   })
  //     .then(res => alert('삭제 되었습니다.'))
  //     .then(setTimeout(() => getCartData(), 300));
  // };

  return (
    <tr className="CartItemCell">
      <td className="prdImg">
        <img src={thumbnail} alt="cartImg" />
      </td>
      <td className="prdInfo">
        <p className="prdName">{name}</p>
        <ul className="prdOption">
          <li>COLOR : {color}</li>
          <li>SIZE : {size}</li>
        </ul>
      </td>
      <td className="prdPrice">
        <p>[판매가] {parseInt(price).toLocaleString()}</p>
      </td>
      <td className="prdQty">
        <ul>
          <li>
            <input
              type="number"
              min="1"
              max="10"
              onChange={handleCount}
              value={itemCount}
            />
          </li>
          <li>
            <button onClick={handleChangeCount}>변경</button>
          </li>
        </ul>
      </td>
      <td className="prdSum">
        <p>{parseInt(sum).toLocaleString()} 원</p>
      </td>
      <td className="prdOrder">
        <ul>
          <li>
            <button className="orderBtn">바로주문</button>
          </li>
          <li>
            <button
              className="orderBtn"
              // onClick={() => {
              //   deleteItem();
              // }}
            >
              삭제
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default CartItemCell;
