import React from 'react';
import './List.scss';

function ItemList({ name, price, thumbnail_image_url }) {
  return (
    // 카드에대한 컨테이너
    <li className="itemList">
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
        <b>{price}</b>원
      </div>
    </li>
  );
}

export default ItemList;