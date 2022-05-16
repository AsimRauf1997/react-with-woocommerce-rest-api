import axios from "axios";
import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../types";

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    });
    const { data } = await axios.get(URL);
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
