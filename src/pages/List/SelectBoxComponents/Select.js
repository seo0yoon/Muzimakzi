import React, { useState } from 'react';
import SelectText from '../SelectTextComponents/SelectText';
import './Select.scss';

const SelectBox = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [count, setCount] = useState();

  return (
    <div className="selectBox">
      <ul className="selectText">
        {SELECTTEXT.map(({ id, list }) => {
          return (
            <SelectText
              id={id}
              key={id}
              list={list}
              isSelected={isSelected}
              count={count}
              setCount={setCount}
              setIsSelected={setIsSelected}
            />
          );
        })}
      </ul>
      <ul className="selectBtnGroup">
        <li className="imageBtn" />
        <li className="imageListBtn" />
      </ul>
      <div className="amountSelectWrap">
        <select name="Select">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBox;

const SELECTTEXT = [
  {
    id: 1,
    list: '온라인 한정 사이즈',
  },
  {
    id: 2,
    list: '무료배송',
  },
  {
    id: 3,
    list: 'SALE',
  },
  {
    id: 4,
    list: '품절',
  },
];
