import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addToFav,
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducer";
import { orderListReducer, singleOrderReducer } from "./reducers/ordersReducer";
import { addToCart } from "./reducers/cartReducer";
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: singleProductReducer,
  ordersList: orderListReducer,
  orderDetail: singleOrderReducer,
  favorites: addToFav,
  cart: addToCart,
});
const ItemsfromStorage = {
  favItemsFromStorage: localStorage.getItem("FavItems")
    ? JSON.parse(localStorage.getItem("FavItems"))
    : [],
  cartItemFromStorage: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};
// const ItemsfromStorage = localStorage.getItem("FavItems")
//   ? JSON.parse(localStorage.getItem("FavItems"))
//   : [];
// const cartItemFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
console.log(localStorage);
const initialState = {
  favorites: { favorite: ItemsfromStorage.favItemsFromStorage },
  cart: { cartItem: ItemsfromStorage.cartItemFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
