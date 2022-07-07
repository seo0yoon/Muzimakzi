import React from 'react';
import '../DetailComponent/TextInfo.scss';

const TextInfo = ({ name, price, description }) => {
  return (
    <ul className="textArea">
      <li className="detailTitle">
        <p>{name}</p>
      </li>
      <li className="detailPrice">
        <p>{parseInt(price)}</p>
      </li>
      <li>
        <p>{description}</p>
      </li>
    </ul>
  );
};

export default TextInfo;
