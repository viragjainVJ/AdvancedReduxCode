import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import stateValidator from "../src/middlewares/stateValidator";
//import reduxPromise from 'redux-promise';
import async from "../src/middlewares/async";
import reducers from "../src/reducers";

export default ({ children, initialState = {} }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(async, stateValidator))
  );

  return <Provider store={store}>{children}</Provider>;
};
