import {
    CUSTOMER_DETAILS_FAILED,
    CUSTOMER_DETAILS_REQUEST,
    CUSTOMER_DETAILS_SUCCESS,
    CUSTOMER_LIST_FAILED,
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
  } from '../constants/customerConstants';
  import axios from 'axios';
  import { apiUrl } from '../../config/api';
  
  export const listCustomers = () => async (dispatch: any) => {
    try {
      dispatch({ type: CUSTOMER_LIST_REQUEST });
  
      const { data } = await axios.get(`${apiUrl}/customers`);
  
      dispatch({
        type: CUSTOMER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CUSTOMER_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const getCustomerDetails = (id: any) => async (dispatch: any) => {
    try {
      dispatch({
        type: CUSTOMER_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(`${apiUrl}/customers/${id}`);
  
      dispatch({
        type: CUSTOMER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CUSTOMER_DETAILS_FAILED,
        payload: message,
      });
    }
  };
  