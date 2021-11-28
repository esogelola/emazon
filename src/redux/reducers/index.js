import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";
const reducers = combineReducers({
  Cart: CartReducer,
  Product: ProductReducer,
  User: UserReducer,
  //other reducers come here...
});

export default reducers;
