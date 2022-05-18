import axios from "axios";
import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  SINGLE_ORDER_LIST_FAIL,
  SINGLE_ORDER_LIST_REQUEST,
  SINGLE_ORDER_LIST_SUCCESS,
} from "../types";

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    });
    const { data } = await axios.get("http://localhost:8000/orders");
    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: error,
    });
  }
};
export const getSingleOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ORDER_LIST_REQUEST,
    });
    const { data } = await axios.get(`http://localhost:8000/orders/${id}`);
    dispatch({
      type: SINGLE_ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_ORDER_LIST_FAIL,
      payload: error,
    });
  }
};
