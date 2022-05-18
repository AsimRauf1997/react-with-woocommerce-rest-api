/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookPage from "./screens/BookPage";
import OrderPage from "./screens/OrderPage";
import Books from "./components/book/Books";
import Header from "./components/Header";
import ProductDetail from "./screens/ProductDetail";
import OrderDetail from "./screens/OrderDetail";
import ProductPage from "./screens/ProductPage";
import FavoritesPage from "./screens/FavoritesPage";
import HomePage from "./screens/naturals/HomePage";
import NaturalPage from "./screens/naturals/NaturalPage";
const App = () => {
  const [posts, setPosts] = useState();
  const URL = "http://localhost/mysite/wp-json/wp/v2/books";
  const getData = async () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route
            path='/'
            exact
            element={!posts ? <h1>Loading....</h1> : <Books books={posts} />}
          />
          <Route exact path='/book/:id' element={<BookPage />} />
          <Route exact path='/crafts' element={<ProductPage />} />
          <Route exact path='/naturals' element={<HomePage />} />
          <Route exact path='/category' element={<NaturalPage />} />
          <Route exact path='/orders' element={<OrderPage />} />
          <Route exact path='/order/:id' element={<OrderDetail />} />
          <Route exact path='/craft/:id' element={<ProductDetail />} />
          <Route exact path='/natural/:id' element={<ProductDetail />} />
          <Route exact path='/fav' element={<FavoritesPage />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
