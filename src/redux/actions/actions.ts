import { action } from "typesafe-actions";
import { JsonFormsCore } from "@jsonforms/core";
import { SET_FORM_DATA } from "./actionTypes";
import { FormDataAction } from "./types";

export const setFormData = (payload: JsonFormsCore): FormDataAction => ({
  payload,
  type: SET_FORM_DATA,
});
export const setFormData2 = (payload: JsonFormsCore) =>
  action(SET_FORM_DATA, payload);
