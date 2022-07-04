import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectText = ({
  list,
  id,
  setCount,
  isSelected,
  setIsSelected,
  count,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.search.charAt(9);
  const handleSelectBtn = () => {
    setIsSelected(!isSelected);
    navigate(`?type_id=${type}&tags=${id}`);
    setCount(id);
  };

  return (
    <div>
      <li
        className={`${count === id ? 'btnBold' : null} selectTagBtn`}
        onClick={handleSelectBtn}
      >
        {list}
      </li>
    </div>
  );
};
export default SelectText;
