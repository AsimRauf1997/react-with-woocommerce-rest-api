import {
  ORDER_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  SINGLE_ORDER_LIST_FAIL,
  SINGLE_ORDER_LIST_REQUEST,
  SINGLE_ORDER_LIST_SUCCESS,
} from "../types";

export const confirmOrder = (state = { data: [] }, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_SUCCESS: {
      return {
        loading: false,
        data: action.payload.data,
        success: action.payload.msg,
      };
    }
    case ORDER_FAIL: {
      return { loading: false, error: action.payload.msg };
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
