import { getDomElByJSONSchemaField } from "./dom";

export const createTextElement = (
  page: any,
  form: any,
  label: string,
  id: string,
  w: number,
  h: number
) => {
  console.log(label, id);
  if (id === null || id === "") {
    return;
  }
  page.drawText(label, {
    x: 15,
    y: h,
    size: 12,
  });

  const nameField = form.createTextField(id);
  nameField.setText(getDomElByJSONSchemaField(id));
  nameField.addToPage(page, { x: 250, y: h, width: 250, height: 20 });
};
