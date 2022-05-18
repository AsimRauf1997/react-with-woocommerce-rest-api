import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addToFav,
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducer";
import { orderListReducer, singleOrderReducer } from "./reducers/ordersReducer";
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: singleProductReducer,
  ordersList: orderListReducer,
  orderDetail: singleOrderReducer,
  favorites: addToFav,
});

const favItemsFromStorage = localStorage.getItem("FavItems")
  ? JSON.parse(localStorage.getItem("FavItems"))
  : [];
const initialState = {
  favorites: { favorite: favItemsFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
