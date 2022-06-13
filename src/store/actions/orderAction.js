import axios from "axios";
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

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_REQUEST,
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_WP_URL}/orders`
    );
    console.log(data);
    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAIL,
      payload: error,
    });
  }
};
export const getSingleOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ORDER_LIST_REQUEST,
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_WP_URL}/orders/${id}`
    );
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
export const addOrder = (orederData) => async (dispatch) => {
  console.log(orederData);
  try {
    dispatch({
      type: ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_WP_URL}/orders/`,
      {
        data: orederData,
      },
      { config }
    );
    console.log("chceking Response:", data);
    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAIL,
      payload: error,
    });
  }
};
