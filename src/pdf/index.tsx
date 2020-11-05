import { PDFDocument } from "pdf-lib";
import { AnyAction, Store } from "redux";
// import { getAllDomFields } from "./dom";
import { createTextElement } from "./generate";
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
    height = 0;
  const pdfDoc = await PDFDocument.create();

  // Add a blank page to the document

  // Get the form so we can add fields to it

  // get fields from dom
  // const fields = getAllDomFields();
  const fields = getAllFields(store);
  console.log(fields);

  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];

    if (index % 10 === 0) {
      page = pdfDoc.addPage();
      form = pdfDoc.getForm();
      width = page.getSize().width;
      height = page.getSize().height;
    }
    createTextElement(page, form, width, height - 70 * index, field);
  }

  // save and download
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "application/pdf");
};
