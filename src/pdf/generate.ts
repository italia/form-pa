import {
  getDomElByJSONSchemaField,
  getDomElCheckBoxByJSONSchemaField,
} from "./dom";
import { Field } from "./field";

export const createLabelElement = (
  page: any,
  form: any,
  w: number,
  h: number,
  { label = "" }: Field
) => {
  page.drawText(label, {
    x: 15,
    y: h,
    size: 12,
  });
};

export const createTextElement = (
  page: any,
  form: any,
  w: number,
  h: number,
  { scope, label = "" }: Field
) => {
  page.drawText(label, {
    x: 15,
    y: h,
    maxWidth: 300,
    size: 12,
  });

  const textField = form.createTextField(scope);
  textField.setText(getDomElByJSONSchemaField(scope));
  textField.addToPage(page, {
    x: 330,
    y: h,
    width: 250,
    height: 20,
  });
};

export const createBooleanElement = (
  page: any,
  form: any,
  w: number,
  h: number,
  { scope, label = "" }: Field
) => {
  page.drawText(label, {
    x: 15,
    y: h,
    maxWidth: 300,
    size: 12,
  });

  const booleanField = form.createCheckBox(scope);

  if (getDomElCheckBoxByJSONSchemaField(scope)) {
    booleanField.check();
  }
  booleanField.addToPage(page, {
    x: 530,
    y: h,
    width: 20,
    height: 20,
  });
};
