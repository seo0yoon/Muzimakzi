import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemList.scss';

function ItemList({ name, price, thumbnail_image_url, id, sorts }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <li className="itemList" onClick={goToDetail}>
      <img className="listImg" src={thumbnail_image_url} alt="남자니트" />
      <div className="listIcons">
        <img
          className="itemListImg"
          src="/images/listpage/icon_zoom.gif"
          alt="iconZoom"
        />
        <img
          className="itemListImg"
          src="/images/listpage/icon_win.gif"
          alt="iconWin"
        />
      </div>
      <div className="listText">{name}</div>
      <div className="listPrice">
        <b>{Math.floor(price).toLocaleString()}</b>원
      </div>
      <div className="tag">
        {sorts.includes('sale') && <span className="sale">SALE</span>}
        {sorts.includes('onlineSize') && (
          <span className="onlineSize">온라인한정사이즈</span>
        )}
        {sorts.includes('freeShipping') && (
          <span className="freeShipping">무료배송</span>
        )}
        {sorts.includes('soldOut') && <span className="soldOut">품절</span>}
      </div>
    </li>
  );
}
export default ItemList;
