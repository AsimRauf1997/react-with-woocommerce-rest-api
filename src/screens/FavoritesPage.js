import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteItem from "../components/favorite/FavoriteItem";

const FavoritesPage = () => {
  const fav = useSelector((state) => state.favorites);
  const { favorite } = fav;
  return (
    <>
      {favorite.map((fav) => (
        <FavoriteItem key={fav.id} data={fav} />
      ))}
    </>
  );
};

export default FavoritesPage;
