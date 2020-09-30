import { jsonformsReducer } from "@jsonforms/core";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { combineReducers, createStore } from "redux";

const store = createStore(combineReducers({ jsonforms: jsonformsReducer() }), {
  jsonforms: {
    cells: materialCells,
    renderers: materialRenderers,
  },
});

export default store;