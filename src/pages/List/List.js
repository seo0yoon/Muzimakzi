import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemList from './ItemListComponents/ItemList';
import Select from './SelectBoxComponents/Select';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const onlineSize = location.search.includes('tags=1');
  const freeShipping = location.search.includes('tags=2');
  const sale = location.search.includes('tags=3');
  const soldOut = location.search.includes('tags=4');

  const womenFiltered = products
    .slice(10, 22)
    .filter(item =>
      item.sorts.find(item =>
        onlineSize
          ? item === 'onlineSize'
          : freeShipping
          ? item === 'freeShipping'
          : soldOut
          ? item === 'soldOut'
          : sale
          ? item === 'sale'
          : item
      )
    );

  const menFiltered = products
    .slice(0, 10)
    .filter(item =>
      item.sorts.find(item =>
        onlineSize
          ? item === 'onlineSize'
          : freeShipping
          ? item === 'freeShipping'
          : soldOut
          ? item === 'soldOut'
          : sale
          ? item === 'sale'
          : item
      )
    );

  const womensList = location.search.split('?')[1].charAt(8);
  // const API_URL = `http://10.58.7.109:8000/products/categories${location.search}`;
  const API_URL = `/data/MockData.json`;
  const mensLength = menFiltered.length;
  const womenLength = womenFiltered.length;

  const getFetch = () => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  };

  useEffect(() => {
    getFetch();
  }, [location.search]);

  return (
    <div className="list">
      <div className="pageContainer">
        {womensList < 5 ? <h4>남성니트</h4> : <h4>여성니트</h4>}
        <nav className="nextPage">
          <p className="textP">
            총 <strong>{womensList < 5 ? mensLength : womenLength}개</strong>의
            상품이 있습니다.
          </p>
          <ul>
            <li className="btnPageL">
              <img src="/images/listpage/btn_first_dim.gif" alt="button" />
            </li>
            <li className="btnPageL">
              <img src="/images/listpage/btn_prev_dim.gif" alt="button" />
            </li>
            <li>
              <strong>1</strong>
            </li>
            <li className="btnPageR">
              <img src="/images/listpage/btn_next_dim.gif" alt="button" />
            </li>
            <li className="btnPageR">
              <img src="/images/listpage/btn_last_dim.gif" alt="button" />
            </li>
          </ul>
        </nav>
        <Select />
        <ul className="product">
          {womensList < 5 &&
            menFiltered &&
            menFiltered.map(product => (
              <ItemList key={product.id} {...product} />
            ))}
          {womensList >= 5 &&
            womenFiltered.map(product => (
              <ItemList key={product.id} {...product} />
            ))}
          {womensList === 10 &&
            products.map(product => <ItemList key={product.id} {...product} />)}
        </ul>
      </div>
    </div>
  );
};
export default List;
