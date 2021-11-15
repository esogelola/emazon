import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
const reducers = combineReducers({
  Test: TestReducer,
  Cart: CartReducer,
  Product: ProductReducer,
  //other reducers come here...
});

export default reducers;
