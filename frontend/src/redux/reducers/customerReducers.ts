import {
  CUSTOMER_DETAILS_FAILED,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_LIST_FAILED,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
} from '../constants/customerConstants';

export const customerListReducer = (
  state = { customers: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return { loading: true, customers: [] };

    case CUSTOMER_LIST_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
      };

    case CUSTOMER_LIST_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const customerDetailsReducer = (
  state = { loading: true, customerDetails: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CUSTOMER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER_DETAILS_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
      };
    case CUSTOMER_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
