import { applyMiddleware, createStore } from "redux";

// Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import thunk from "redux-thunk";
// Root reducer
import reducers from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
export const store = createStore(
  persistedReducer,

  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
