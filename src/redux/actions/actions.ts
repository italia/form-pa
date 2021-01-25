import { JsonFormsCore } from "@jsonforms/core";
import { SET_FORM_DATA } from "./actionTypes";
import { FormDataAction } from "./types";

export const setFormData = (payload: JsonFormsCore): FormDataAction => ({
  payload,
  type: SET_FORM_DATA,
});
