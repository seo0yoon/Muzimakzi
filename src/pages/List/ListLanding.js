import React from 'react';
import './ListLanding.scss';

const ListLanding = () => {
  return (
    <div className="listLanding">
      <img src="/images/listpage/상품준비중.png" alt="" />
      <h1 className="listLandingTit">상품 준비중</h1>
      <h4 className="listLandingText">
        더 나은 구성을 위한 상품 준비중 입니다. <br />
        조금만 기다려주세요!
      </h4>
    </div>
  );
};

export default ListLanding;
