/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { removeFromFav } from "../../store/actions/productAction";
import ProductItem from "../product/ProductItem";

const FavoriteItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    toast(`${data.name} Removed `);
    dispatch(removeFromFav(data.id));
  };

  return (
    <ProductItem data={data} flag={"favorite"} handleRemove={handleRemove} />
  );
};
export default FavoriteItem;
