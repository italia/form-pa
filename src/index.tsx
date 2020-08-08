import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import { Actions, jsonformsReducer } from "@jsonforms/core";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonFormsReduxContext } from "@jsonforms/react";
import yaml from "js-yaml";
const $RefParser = require("@apidevtools/json-schema-ref-parser");

const isYAML = process.env.YAML_SOURCE || true;

let schemaURL: string = "",
  uischemaURL: string = "";

if (isYAML) {
  schemaURL = "schema/schema.yaml";
  uischemaURL = "schema/uischema.yaml";
} else {
  schemaURL = "schema/schema.json";
  uischemaURL = "schema/uischema.json";
}

const fetchSchema = async (url: string, dereference: boolean = false) => {
  const text = await (await fetch(url)).text();
  let out: string | object | undefined = text;
  out = yaml.safeLoad(text);
  
  console.debug(url, out);

  if (!dereference) return out;

  try {
    return await $RefParser.dereference(out);
  } catch (err) {
    console.error("Cannot dereference", err);
    throw err;
  }
};

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

fetchSchema(schemaURL).then((schemaRetrieved) => {
  console.log("schemaRetrieved", schemaRetrieved);

  $RefParser.dereference(schemaRetrieved, (err: any, schema: any) => {
    console.log("schema", err);
    if (err) {
      console.error(err);
      throw err;
    }
    fetchSchema(uischemaURL, true).then((uischema) => {
      const dataC = uischema._meta?.data || data || {};
      store.dispatch(Actions.init(dataC, schema, uischema));
    });
  });
});

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
