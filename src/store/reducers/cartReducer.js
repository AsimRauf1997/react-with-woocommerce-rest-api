import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cart = action.payload;
      const existInCart = state.cartItem.find((arr) => arr.id === cart.id);
      if (existInCart) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.id === existInCart.id ? cart : x
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter((x) => x.id !== action.payload),
      };

    default: {
      return state;
    }
  }
};
