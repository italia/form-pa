import { JsonFormsCore } from "@jsonforms/core";
import {
  dataMock,
  schemaMock,
  uischemaMock,
} from "../../../__mocks__/jsonFormsMock";
import * as types from "./actionTypes";
import * as actions from "./index";

describe("actions", () => {
  it("should create an action to add data", () => {
    const payload: JsonFormsCore = {
      data: dataMock,
      schema: schemaMock,
      uischema: uischemaMock,
    };
    const expectedAction = {
      payload,
      type: types.SET_FORM_DATA,
    };
    expect(actions.setFormData(payload)).toEqual(expectedAction);
  });
});
