import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (data) => async (dispatch, getState) => {
  console.log("Cart Action:", data);
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};
export const removeFromCart = (id) => async (dispatch, getState) => {
  console.log("Id", typeof id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};
