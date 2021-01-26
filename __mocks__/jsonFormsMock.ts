import { Generate, JsonSchema7, UISchemaElement } from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

export const schemaMock: JsonSchema7 = {
  properties: {
    foo: {
      minLength: 5,
      type: "string",
    },
  },
  required: ["foo"],
  type: "object",
};

export const uischemaMock: UISchemaElement = Generate.uiSchema(schemaMock);
export const dataMock = {
  foo: "testtest",
};
export const errorDataMock = {
  foo: "test",
};
export const formParamMock = {
  cells: materialCells,
  data: dataMock,
  renderers: materialRenderers,
  schemaMock,
  uischemaMock,
};
