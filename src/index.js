import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feelings = (state = [], action) => {
  switch (action.type) {
    case "SET_FEELING":
      return action.payload;
  }
  return state;
};

const understanding = (state = [], action) => {
  switch (action.type) {
    case "SET_UNDERSTANDING":
      return action.payload;
  }
  return state;
};

const support = (state = [], action) => {
  switch (action.type) {
    case "SET_SUPPORT":
      return action.payload;
  }
  return state;
};

const comment = (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENT":
      return action.payload;
  }
  return state;
};

const reviewFeedback = (state = [], action) => {
  switch (action.type) {
    case "SET_REVIEW_FEEDBACK":
      return action.payload;
  }
  return state;
};
const storeInstance = createStore(
  combineReducers({
    feelings,
    understanding,
    support,
    comment,
    reviewFeedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
