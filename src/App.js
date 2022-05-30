/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OrderPage from "./screens/OrderPage";
import Header from "./components/Header";
import ProductDetail from "./screens/ProductDetail";
import OrderDetail from "./screens/OrderDetail";
import ProductPage from "./screens/ProductPage";
import FavoritesPage from "./screens/FavoritesPage";
import HomePage from "./screens/naturals/HomePage";
import NaturalPage from "./screens/naturals/NaturalPage";
import CartPage from "./screens/cart/CartPage";
import LoginPage from "./screens/login/LoginPage";
import Signup from "./screens/signup/Signup";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes>
        <>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/crafts' element={<ProductPage />} />
          <Route exact path='/naturals' element={<HomePage />} />
          <Route exact path='/natural/:slug' element={<NaturalPage />} />
          <Route exact path='/orders' element={<OrderPage />} />
          <Route exact path='/order/:id' element={<OrderDetail />} />
          <Route exact path='/productdetail/:id' element={<ProductDetail />} />
          <Route exact path='/fav' element={<FavoritesPage />} />
          <Route exact path='/cart' element={<CartPage />} />
        </>
      </Routes>
    </Router>
  );
};

export default App;
