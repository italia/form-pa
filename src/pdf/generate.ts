import { getDomElByJSONSchemaField } from "./dom";
import { Field } from "./field";

export const createTextElement = (
  page: any,
  form: any,
  w: number,
  h: number,
  { scope, label = "" }: Field
) => {
  console.log(label, scope);

  // whether scope is not present that means it
  // is a simple label
  if (scope === "") {
    // simple label
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
    size: 12,
  });

  const nameField = form.createTextField(scope);
  nameField.setText(getDomElByJSONSchemaField(scope));
  nameField.addToPage(page, { x: 250, y: h, width: 250, height: 20 });
};
