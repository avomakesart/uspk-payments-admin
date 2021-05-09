import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  categoryDetailsReducer,
  categoryListReducer,
} from './reducers/categoryReducers';
import {
  customerDetailsReducer,
  customerListReducer,
} from './reducers/customerReducers';
import {
  orderListReducer,
  orderDetailsReducer,
} from './reducers/orderReducers';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  customerList: customerListReducer,
  customerDetails: customerDetailsReducer,
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
