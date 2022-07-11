import React, { useState } from 'react';
import './CartItemCell.scss';
const CartItemCell = ({
  cartItem: { name, size, color, price, thumbnail, count, id },

  getCartData,
  handleAdd,
  handleMin,
  onDelete,
}) => {
  const [itemCount, setItemCount] = useState(count);

  const sum = price * count;

  const handleCount = e => {
    const { value } = e.target;
    setItemCount(value);
  };

  const handleAlertDelete = () => {
    alert('더 나은 서비스를 위해 준비중 입니다. 조금만 기다려주세요!');
  };

  // 백엔드 api 연결시 사용 코드
  // const handleChangeCount = () => {
  //   alert('수량을 변경하시겠습니까?');
  //   alert('변경되었습니다.');
  // };

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
        <p>[판매가] {Math.floor(price).toLocaleString()}</p>
      </td>
      <td className="prdQty">
        <div className="amountBtn">
          <div className="handleBtn">
            <div className="handleAmount">{count}</div>
            <button
              className="handleMinus"
              onChange={handleCount}
              onClick={() => handleMin(id, color, size)}
            >
              -
            </button>
            <button
              className="handleAdd"
              onChange={handleCount}
              onClick={e => handleAdd(id, color, size)}
            >
              +
            </button>
          </div>
        </div>
        {/* <li>
          <input
            type="number"
            min="1"
            max="10"
            onChange={handleCount}
            value={itemCount}
            onClick={() => handleAdd()}
          />
        </li> */}

        {/* 백엔드 api 연결시 사용 코드
        <li>
          <button onClick={handleChangeCount}>변경</button>
        </li> */}
      </td>
      <td className="prdSum">
        <p>{Math.floor(sum).toLocaleString()} 원</p>
      </td>
      <td className="prdOrder">
        <ul>
          <li>
            <button className="orderBtn" onClick={handleAlertDelete}>
              바로주문
            </button>
          </li>
          <li>
            <button
              className="orderBtn"
              // 백엔드 api
              // onClick={() => {
              //   deleteItem();
              // }}
              // onClick={handleAlertDelete}
              onClick={() => onDelete(id, color, size)}
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
