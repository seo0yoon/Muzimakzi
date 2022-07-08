import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Mens from './pages/Mens/Mens';
import Landing from './pages/Landing/Landing';
import Labo from './pages/Labo/Labo';
import Nav from './components/nav/Nav';
import Aside from './components/aside/Aside';
import MainContainer from './MainContainer/MainContainer';
import ContentsWrapper from './ContentsWrapper/ContentsWrapper';
import ListLanding from './pages/List/ListLanding';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <MainContainer>
        <Aside />
        <ContentsWrapper>
          <Routes>
            <Route path="" element={<Labo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="products/categories" element={<List />} />
            <Route path="products/categories/:id/types" element={<Mens />} />
            <Route path="products/categories/3/types" element={<Labo />} />
            <Route path="/products/listlanding" element={<ListLanding />} />
          </Routes>
        </ContentsWrapper>
      </MainContainer>
    </BrowserRouter>
  );
};
export default Router;
