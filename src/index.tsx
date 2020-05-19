import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import { Actions, jsonformsReducer } from "@jsonforms/core";
import { person } from "@jsonforms/examples";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonFormsReduxContext } from "@jsonforms/react";

const schema = person.schema;
const uischema = person.uischema;
const data = person.data;

const store = createStore(combineReducers({ jsonforms: jsonformsReducer() }), {
  jsonforms: {
    cells: materialCells,
    renderers: materialRenderers,
  },
});

store.dispatch(Actions.init(data, schema, uischema));

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
