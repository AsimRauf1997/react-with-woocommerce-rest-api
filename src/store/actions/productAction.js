import axios from "axios";
import {
  ADD_TO_FAVORITE,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REMOVE_FROM_FAVORITE,
  SINGLE_PRODUCT_LIST_FAIL,
  SINGLE_PRODUCT_LIST_REQUEST,
  SINGLE_PRODUCT_LIST_SUCCESS,
} from "../types";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    const { data } = await axios.get("http://localhost:8000/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_PRODUCT_LIST_REQUEST,
    });
    const { data } = await axios.get(`http://localhost:8000/products/${id}`);
    dispatch({
      type: SINGLE_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};
export const addToFav = (data) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAVORITE,
    payload: data,
  });
  localStorage.setItem(
    "FavItems",
    JSON.stringify(getState().favorites.favorite)
  );
};
export const removeFromFav = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVORITE,
    payload: id,
  });
  localStorage.setItem(
    "FavItems",
    JSON.stringify(getState().favorites.favorite)
  );
};
