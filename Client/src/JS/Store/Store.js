import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./AllReducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);