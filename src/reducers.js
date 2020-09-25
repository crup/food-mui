import { combineReducers } from 'redux';
import menuList from "./components/menu-list/reducers";
import shoppingCart from "./components/cart-list/reducers";

export default combineReducers({
  menuList,
  shoppingCart
});