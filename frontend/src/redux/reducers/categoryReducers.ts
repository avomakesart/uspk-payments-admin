import {
  CATEGORY_DETAILS_FAILED,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAILED,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstants';

export const categoryListReducer = (
  state = { customers: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, customers: [] };

    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };

    case CATEGORY_LIST_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const categoryDetailsReducer = (
  state = { loading: true, categoryDetails: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case CATEGORY_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
