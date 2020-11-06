import { getDomElByJSONSchemaField } from "./dom";
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
  return;
};

export const createTextElement = (
  page: any,
  form: any,
  w: number,
  h: number,
  { scope, label = "" }: Field
) => {
  // whether scope is not present that means it
  // is a simple label
  if (scope === "") {
    page.drawText(label, {
      x: 15,
      y: h - 20,
      size: 12,
    });
    return;
  }

  page.drawText(label, {
    x: 15,
    y: h,
    maxWidth: 300,
    size: 12,
  });

  const nameField = form.createTextField(scope);
  nameField.setText(getDomElByJSONSchemaField(scope));
  nameField.addToPage(page, {
    x: 330,
    y: h,
    width: 250,
    height: 20,
  });
};
