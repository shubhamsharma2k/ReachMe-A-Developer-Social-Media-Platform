import { createStore, applyMiddleware } from "redux";
import { compositeDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compositeDevTools(applyMiddleware(...middleware))
);

export default store;
