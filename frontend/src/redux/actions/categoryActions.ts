import {
  CATEGORY_DETAILS_FAILED,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAILED,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstants';
import axios from 'axios';
import { apiUrl } from '../../config/api';

export const listCategories = () => async (dispatch: any) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(`${apiUrl}/categories`);

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCategoryDetails = (id: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: CATEGORY_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${apiUrl}/categories/${id}`);

    dispatch({
      type: CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CATEGORY_DETAILS_FAILED,
      payload: message,
    });
  }
};
