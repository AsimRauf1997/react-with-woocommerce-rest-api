import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(
        state.cartItem.map((x) =>
          x._id
            ? x._id
            : x.id === action.payload._id
            ? action.payload._id
            : action.payload.id
            ? action.payload
            : x
        )
      );
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (x) => (x.id ? x.id : x._id) !== action.payload
        ),
      };

    default: {
      return state;
    }
  }
};
