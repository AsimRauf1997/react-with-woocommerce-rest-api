import {
  ADD_TO_FAVORITE,
  CRAFT_PRODUCT_LIST_FAIL,
  CRAFT_PRODUCT_LIST_REQUEST,
  CRAFT_PRODUCT_LIST_SUCCESS,
  CRAFT_SINGLE_PRODUCT_LIST_FAIL,
  CRAFT_SINGLE_PRODUCT_LIST_REQUEST,
  CRAFT_SINGLE_PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REMOVE_FROM_FAVORITE,
  SINGLE_PRODUCT_LIST_FAIL,
  SINGLE_PRODUCT_LIST_REQUEST,
  SINGLE_PRODUCT_LIST_SUCCESS,
} from "../types";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
export const craftProductReducer = (state = { craftProducts: [] }, action) => {
  switch (action.type) {
    case CRAFT_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CRAFT_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        craftProducts: action.payload,
      };
    case CRAFT_PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
export const craftSingleProduct = (state = { craftProduct: [] }, action) => {
  switch (action.type) {
    case CRAFT_SINGLE_PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, craftProduct: [] };
    case CRAFT_SINGLE_PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, craftProduct: action.payload };
    case CRAFT_SINGLE_PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const singleProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_LIST_REQUEST:
      return { loading: true };
    case SINGLE_PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case SINGLE_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addToFav = (state = { favorite: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const fav = action.payload;
      const existItem = state.favorite.find((x) => x.id === fav.id);
      if (existItem) {
        return {
          ...state,
          favorite: state.favorite.map((x) =>
            x.id === existItem.id ? fav : x
          ),
        };
      } else {
        return {
          ...state,
          favorite: [...state.favorite, action.payload],
        };
      }
    case REMOVE_FROM_FAVORITE: {
      return {
        ...state,
        favorite: state.favorite.filter((x) => x.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
