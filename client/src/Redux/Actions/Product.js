import {
    PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_REQ_FAIL,
  PRODUCT_DETAIL_REQ_SUCCESS,
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_REQ_FAIL,
  PRODUCT_LIST_REQ_SUCCESS,
} from "../Constants/Product";
import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQ });

    const { data } = await axios.get(BASE_URL + "/api/products");
    dispatch({ type: PRODUCT_LIST_REQ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_REQ_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const productAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQ });
  
      const { data } = await axios.get(BASE_URL + "/api/products/"+ id);
      console.log(data)
      dispatch({ type: PRODUCT_DETAIL_REQ_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_REQ_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
