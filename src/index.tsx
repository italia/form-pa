import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import { Actions, jsonformsReducer } from "@jsonforms/core";
import schema from "./schema.json";
// import uischema from "./uischema.json";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonFormsReduxContext } from "@jsonforms/react";

// Setup Redux store
const data = {
  id: 1,
  name: "Mario",
  last_name: "Rossi",
  address: "Via Roma 1",
  cap: "00100",
  province: "RM",
  city: "Roma",
  country: "Italia",
};

const store = createStore(combineReducers({ jsonforms: jsonformsReducer() }), {
  jsonforms: {
    cells: materialCells,
    renderers: materialRenderers,
  },
});

store.dispatch(Actions.init(data, schema, undefined));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <JsonFormsReduxContext>
        <App />
      </JsonFormsReduxContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
