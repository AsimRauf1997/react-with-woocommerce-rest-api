import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addToFav,
  craftProductReducer,
  craftSingleProduct,
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducer";
import {
  orderListReducer,
  orderReducer,
  singleOrderReducer,
} from "./reducers/ordersReducer";
import { addToCart } from "./reducers/cartReducer";
import { loginUser, registerUser } from "./reducers/userReducer";
import { login } from "./actions/userAction";
const reducer = combineReducers({
  productList: productListReducer,
  craft: craftProductReducer,
  craftProductDetail: craftSingleProduct,
  productDetail: singleProductReducer,
  ordersList: orderReducer,
  orderDetail: singleOrderReducer,
  favorites: addToFav,
  cart: addToCart,
  user: registerUser,
  userLogin: loginUser,
});
const ItemsfromStorage = {
  favItemsFromStorage: localStorage.getItem("FavItems")
    ? JSON.parse(localStorage.getItem("FavItems"))
    : [],
  cartItemFromStorage: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

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
