import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./app/reducer/index";

const initialState = {};
const middleware = [thunk];

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
