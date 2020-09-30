import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { Actions } from "@jsonforms/core";
import { JsonFormsReduxContext } from "@jsonforms/react";
import yaml from "js-yaml";
import store from "./store";

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
  const out = yaml.safeLoad(text);
  
  console.debug(url, out);

  if (!dereference) return out;

  try {
    return await $RefParser.dereference(out);
  } catch (err) {
    console.error("Cannot dereference", err);
    throw err;
  }
};

fetchSchema(schemaURL).then((schemaRetrieved) => {
  console.log("schemaRetrieved", schemaRetrieved);

  $RefParser.dereference(schemaRetrieved, (err: any, schema: any) => {
    console.log("schema", err);
    if (err) {
      console.error(err);
      throw err;
    }
    fetchSchema(uischemaURL, true).then((uischema) => {
      const dataC = uischema._meta?.data || {};
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
