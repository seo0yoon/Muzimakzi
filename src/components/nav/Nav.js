import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from '../../pages/LoginSignup/LoginSignup';
import './Nav.scss';

const Nav = () => {
  const [signModal, setSignModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginModal = () => {
    setSignModal(!signModal);
  };

  const handleLoginStatus = () => {
    localStorage.getItem('TOKEN') ? setIsLogin(true) : setIsLogin(false);
  };

  useEffect(() => {
    handleLoginStatus();
  });

  const handleLogout = () => {
    alert('로그아웃 되었습니다');
    localStorage.removeItem('TOKEN');
    handleLoginStatus();
  };

  const handleMypage = () => {
    if (localStorage.length) {
      alert('Coming Soon.');
    } else {
      alert('로그인을 진행해주세요.');
    }
  };

  return (
    <nav className="nav">
      <div className="navBox">
        <div className="navTop">
          <Link to="/" className="Logo">
            <span className="muziLogo">MUZI</span>
            <img
              src="/images/nav/MUZISIDE.png"
              alt="SideLogo"
              className="SideLogoImg"
            />
          </Link>
          <div className="navSearch">
            <input className="searchInput" type="text" />
            <img src="/images/nav/searchIcon.png" alt="searchIcon" />
          </div>
          <div className="linkItem">
            {isLogin ? (
              <Link to="/">
                <button
                  type="button"
                  className="btnLogout"
                  onClick={handleLogout}
                />
              </Link>
            ) : (
              <button
                type="button"
                className="btnLogin"
                onClick={handleLoginModal}
              />
            )}
            <Link to="/">
              <button
                type="button"
                className="btnMypage"
                onClick={handleMypage}
              />
            </Link>
            {/* 로그인 회원가입 코드
            {!localStorage.length ? (
              <Link to="/cart">
                <button type="button" className="btnCart" />
              </Link>
            ) : (
              <button
                onClick={() => {
                  alert('로그인을 진행 해주세요.');
                }}
                type="button"
                className="btnCart"
              />
            )} */}
            <Link to="/cart">
              <button type="button" className="btnCart" />
            </Link>
          </div>
        </div>
        <div className="navBottom">
          <ul className="inner">
            {INNERS.map(inner => (
              <li key={inner.id}>
                <Link to={inner.url} title={inner.value}>
                  {inner.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {signModal && <LoginSignup handleLoginModal={handleLoginModal} />}
    </nav>
  );
};

export default Nav;

const INNERS = [
  {
    id: '1',
    url: '/',
    value: '인기상품',
  },
  {
    id: '2',
    url: '/',
    value: '신상품',
  },
  {
    id: '3',
    url: '/',
    value: '온라인 한정사이즈',
  },
  {
    id: '4',
    url: '/',
    value: '가격 인하',
  },
  {
    id: '5',
    url: '/',
    value: '기간 한정',
  },
  {
    id: '6',
    url: '/',
    value: '의복잡화 아울렛',
  },
  {
    id: '7',
    url: '/',
    value: '생활잡화 아울렛',
  },
];
