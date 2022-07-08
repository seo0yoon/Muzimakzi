import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  // const [categoryList, setCategoryList] = useState([]);
  const [countIndex, setCountIndex] = useState(0);
  const navigate = useNavigate();

  //백엔드 API
  // const getFetch = () => {
  //   fetch(`${CATEGOTY_LIST}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCategoryList(data.side_info);
  //     });
  // };

  // useEffect(() => {
  //   getFetch();
  // }, []);

  const goToListLanding = id => {
    (id !== 0) & (id !== 5) && navigate('/products/listlanding');
  };

  const productList = typeId => {
    const queryString = `products/categories?type_id=${typeId}`;
    navigate(queryString);
  };

  const handleOnClick = (e, id) => {
    setCountIndex(id);
  };

  return (
    <div className="aside">
      {CATEGOTY_LIST.map(({ id, name, types }) => {
        return (
          <div className="asideCategory" key={id}>
            <Link to={`/products/categories/${id + 1}/types`}>
              <h2 className="categoryName">{name}</h2>
            </Link>
            <ul className="categoryTypes">
              {types.map(({ id, name }) => {
                return (
                  <li
                    key={id}
                    className={countIndex === id ? 'categoryType' : 'btnBold'}
                    onClick={e => {
                      productList(id);
                      handleOnClick(e, id);
                      goToListLanding(id);
                    }}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;

const CATEGOTY_LIST = [
  {
    id: 0,
    name: '남성복',
    types: [
      { id: 0, name: '남성 니트' },
      { id: 1, name: '남성 컷앤소' },
      { id: 2, name: '남성 셔츠' },
      { id: 3, name: '남성 아웃트탑' },
      { id: 4, name: '남성 하의' },
    ],
  },
  {
    id: 1,
    name: '여성복',
    types: [
      { id: 5, name: '여성 니트' },
      { id: 6, name: '여성 컷앤소' },
      { id: 7, name: '여성 셔츠 • 원피스' },
      { id: 8, name: '여성 아웃트탑' },
      { id: 9, name: '여성 보텀' },
    ],
  },
  {
    id: 2,
    name: 'MUZI MAKZI',
    types: [{ id: 10, name: '유니섹스 MAKZI' }],
  },
];
