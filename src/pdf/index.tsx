import { PDFDocument } from "pdf-lib";
import { AnyAction, Store } from "redux";
import { getAllDomFields } from "./dom";
import { createTextElement } from "./generate";

const download = (arrayBuffer: any, type: string) => {
  var blob = new Blob([arrayBuffer], { type: type });
  var url = URL.createObjectURL(blob);
  window.open(url);
};

export const getPDF = async (store: Store<any, AnyAction>) => {
  const pdfDoc = await PDFDocument.create();

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the form so we can add fields to it
  const form = pdfDoc.getForm();

  const { width, height } = page.getSize();

  const fields = getAllDomFields();
  fields.forEach((field) => {
    createTextElement(
      page,
      form,
      field.label,
      field.id,
      width,
      height - 70 * fields.indexOf(field)
    );
  });

  // save and download
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "application/pdf");
};
