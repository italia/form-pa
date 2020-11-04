import { PDFDocument } from "pdf-lib";
import { AnyAction, Store } from "redux";

const download = (arrayBuffer: any, type: string) => {
  var blob = new Blob([arrayBuffer], { type: type });
  var url = URL.createObjectURL(blob);
  window.open(url);
};

const getDomElByJSONSchemaField = (elID: string): string => {
  return (document.getElementById(elID) as HTMLInputElement).value;
};

const createTextElement = (
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

export const getPDF = async (store: Store<any, AnyAction>) => {
  const pdfDoc = await PDFDocument.create();

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the form so we can add fields to it
  const form = pdfDoc.getForm();

  const { width, height } = page.getSize();

  const schema = store.getState().jsonforms?.core?.schema?.properties;
  if (schema === null) {
    console.error("schema not defined", store.getState());
  }
  console.log("schema", store.getState().jsonforms);

  const containerInnerHTML = document.querySelector("#container");
  console.log("html", containerInnerHTML);

  const allInputs = document.getElementsByTagName("input");

  for (let index = 0; index < allInputs.length; ++index) {
    let name = "",
      el;
    try {
      el = document.querySelector(
        `[for="${allInputs[index].id}"]`
      ) as HTMLDivElement;
      name = el.innerHTML;
    } catch {
      el = null;
    }

    createTextElement(
      page,
      form,
      name,
      allInputs[index].id,
      width,
      height - 70 * index
    );
  }

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "application/pdf");
};
