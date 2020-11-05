import { AnyAction, Store } from "redux";
import { getDomElLabelByID } from "./dom";
import { Field, Fields } from "./field";

const depth = (element: Array<Field>, out: Array<Field>) => {
  const suffix = "2-input";
  element.forEach((e) => {
    if (Array.isArray(e.elements)) {
      if (e.label) {
        out.push({ type: "label", label: e.label, scope: "" });
      }
      depth(e.elements, out);
    } else {
      out.push({
        ...e,
        scope: e.scope + suffix,
        label: getDomElLabelByID(e.scope + suffix),
      });
    }
  });
};

const flatten = (array: Array<Field>) => {
  let out: Array<Field> = [];
  if (!array) return [];
  depth(array, out);
  return out;
};

export const getAllFields = (store: Store<any, AnyAction>): Fields => {
  const state = store.getState();
  const schema = state.jsonforms?.core?.schema?.properties;
  const uischema = state.jsonforms?.core?.uischema;
  const data = state.jsonforms?.core?.data;

  if (schema === null) {
    console.error("schema not defined", state);
  }

  console.log("schema", schema);
  console.log("uischema", uischema);
  console.log("data", data);

  return flatten(uischema.elements);
};
