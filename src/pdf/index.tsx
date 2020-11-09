import { PDFDocument } from "pdf-lib";
import { AnyAction, Store } from "redux";
// import { getAllDomFields } from "./dom";
import { createTextElement, createLabelElement } from "./generate";
import { getAllFields } from "./schema";

const download = (arrayBuffer: any, type: string) => {
  var blob = new Blob([arrayBuffer], { type: type });
  var url = URL.createObjectURL(blob);
  window.open(url);
};

export const getPDF = async (store: Store<any, AnyAction>) => {
  let page,
    form,
    width = 0,
    height = 0,
    spacer = 45;
  const pdfDoc = await PDFDocument.create();
  // get fields from dom
  // const fields = getAllDomFields();
  const fields = getAllFields(store);
  console.log(fields);

  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];

    // space (height) on doc exausthed
    if (height <= spacer) {
      page = pdfDoc.addPage();
      form = pdfDoc.getForm();
      width = page.getSize().width;
      height = page.getSize().height;
    }
    height = height - spacer;

    switch (field.type) {
      case "object":
      case "label":
        height -= field.label?.length || 0;
        createLabelElement(page, form, width, height, field);
        break;
      case "string":
        createTextElement(page, form, width, height, field);
        break;
      case "boolean":
        createTextElement(page, form, width, height, field);
        break;
      default:
        createTextElement(page, form, width, height, field);
        break;
    }
  }

  // save and download
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "application/pdf");
};
