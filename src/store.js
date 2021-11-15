import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(
  reducers,

  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
