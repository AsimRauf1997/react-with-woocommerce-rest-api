import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducer";
import { orderListReducer } from "./reducers/ordersReducer";
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: singleProductReducer,
  ordersList: orderListReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
