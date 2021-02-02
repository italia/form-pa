import { JsonFormsCore } from "@jsonforms/core";
import { SET_FORM_DATA, GET_FORM_DATA, SUBMIT_FORM_DATA } from "./actionTypes";

interface SubmitFormDataAction {
  readonly type: typeof SUBMIT_FORM_DATA;
  readonly payload: Partial<JsonFormsCore>;
}

interface SetFormDataAction {
  readonly type: typeof SET_FORM_DATA;
  readonly payload: Partial<JsonFormsCore>;
}

interface GetFormDataAction {
  readonly type: typeof GET_FORM_DATA;
  readonly payload: Partial<JsonFormsCore>;
}

export type FormDataAction =
  | SetFormDataAction
  | GetFormDataAction
  | SubmitFormDataAction;
