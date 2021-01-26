import { JsonFormsCore } from "@jsonforms/core";
import { SET_FORM_DATA, GET_FORM_DATA } from "./actionTypes";

interface SetFormDataAction {
  readonly type: typeof SET_FORM_DATA;
  readonly payload: JsonFormsCore;
}

interface GetFormDataAction {
  readonly type: typeof GET_FORM_DATA;
  readonly payload: JsonFormsCore;
}

export type FormDataAction = SetFormDataAction | GetFormDataAction;
