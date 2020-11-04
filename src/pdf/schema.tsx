import { AnyAction, Store } from "redux";
import { Fields } from "./field";

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

  return [{ id: "", label: "" }];
};
