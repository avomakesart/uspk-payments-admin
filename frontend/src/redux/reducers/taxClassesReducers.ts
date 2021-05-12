import {
  TAX_CLASSES_DETAILS_FAILED,
  TAX_CLASSES_DETAILS_REQUEST,
  TAX_CLASSES_DETAILS_SUCCESS,
  TAX_CLASSES_LIST_FAILED,
  TAX_CLASSES_LIST_REQUEST,
  TAX_CLASSES_LIST_SUCCESS,
} from '../constants/taxClassesConstants';

export const taxClassesListReducer = (
  state = { products: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case TAX_CLASSES_LIST_REQUEST:
      return { loading: true, taxClasses: [] };

    case TAX_CLASSES_LIST_SUCCESS:
      return {
        loading: false,
        taxClasses: action.payload,
      };

    case TAX_CLASSES_LIST_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const taxClassesDetailsReducer = (
  state = { loading: true, taxClassesDetails: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case TAX_CLASSES_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TAX_CLASSES_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case TAX_CLASSES_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
