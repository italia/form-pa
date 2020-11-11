import { AnyAction, Store } from "redux";
import { getDomElLabelByID } from "./dom";
import { Field, Fields } from "./field";

const suffix = "2-input";

const deepValue = (o: any, p: Array<String>) => p.reduce((a, v: any) => a[v], o);

const mapElementWithSchema = (schema: any, field: Field): Field => {
  const walkPath = field.scope.split("/");
  walkPath[walkPath.length - 1] = walkPath[walkPath.length - 1].replace(
    suffix,
    ""
  ); // removing suffix
  walkPath.shift(); // removing "#"

  let out = deepValue(schema, walkPath);
  field.type = out.type;
  if (out.title) {
    field.label = out.title;
  }
  return field;
};

const mapWithSchema = (schema: any, fields: Fields): Fields => {
  return fields.map((field) => {
    return mapElementWithSchema(schema, field);
  });
};

const depth = (element: Fields, out: Fields): void => {
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

const flatten = (array: Fields): Fields => {
  let out: Fields = [];
  if (!array) return [];
  depth(array, out);
  return out;
};

export const getAllFields = (store: Store<any, AnyAction>): Fields => {
  const state = store.getState();
  const schema = state.jsonforms?.core?.schema;
  const uischema = state.jsonforms?.core?.uischema;
  const data = state.jsonforms?.core?.data;

  if (schema === null) {
    console.error("schema not defined", state);
  }

  console.log("schema", schema);
  console.log("uischema", uischema);
  console.log("data", data);

  let fields = flatten(uischema.elements);

  return mapWithSchema(schema, fields);
};
