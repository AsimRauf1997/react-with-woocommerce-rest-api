import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  SINGLE_ORDER_LIST_FAIL,
  SINGLE_ORDER_LIST_REQUEST,
  SINGLE_ORDER_LIST_SUCCESS,
} from "../types";

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS: {
      return {
        loading: false,
        orders: action.payload,
      };
    }
    case ORDER_LIST_FAIL: {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const singleOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case SINGLE_ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case SINGLE_ORDER_LIST_SUCCESS: {
      return {
        loading: false,
        order: action.payload,
      };
    }
    case SINGLE_ORDER_LIST_FAIL: {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
