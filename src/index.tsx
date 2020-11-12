import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { JsonFormsReduxContext } from "@jsonforms/react";
import store from "./store";
import { loadSchema } from "./schemaLoader";

loadSchema(store);

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
