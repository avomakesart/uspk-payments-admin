import {
  TAX_CLASSES_DETAILS_FAILED,
  TAX_CLASSES_DETAILS_REQUEST,
  TAX_CLASSES_DETAILS_SUCCESS,
  TAX_CLASSES_LIST_FAILED,
  TAX_CLASSES_LIST_REQUEST,
  TAX_CLASSES_LIST_SUCCESS,
} from '../constants/taxClassesConstants';
import axios from 'axios';
import { apiUrl } from '../../config/api';

export const listTaxClasses = () => async (dispatch: any) => {
  try {
    dispatch({ type: TAX_CLASSES_LIST_REQUEST });

    const { data } = await axios.get(`${apiUrl}/taxes/classes`);

    dispatch({
      type: TAX_CLASSES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAX_CLASSES_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTaxClassesDetails = (id: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: TAX_CLASSES_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${apiUrl}/taxes/classes/${id}`);

    dispatch({
      type: TAX_CLASSES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TAX_CLASSES_DETAILS_FAILED,
      payload: message,
    });
  }
};
