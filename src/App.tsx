import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { HeaderBar } from "./components/HeaderBar";
import { JsonFormsDispatch } from "@jsonforms/react";
// @ts-ignore
import { Button, Container } from "design-react-kit";
import QRCode from "./components/QRCode";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web/index.css";
import "typeface-roboto-mono/index.css";
import "typeface-lora/index.css";
import { PDFDocument } from "pdf-lib";

const download = (arrayBuffer: any, type: string) => {
  var blob = new Blob([arrayBuffer], { type: type });
  var url = URL.createObjectURL(blob);
  window.open(url);
};

const getDomElByJSONSchemaField = (elID: string): string => {
  return (document.getElementById(elID) as HTMLInputElement).value;
};

const getPDF = async (formRef: any) => {
  const pdfDoc = await PDFDocument.create();

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the form so we can add fields to it
  const form = pdfDoc.getForm();

  const { width, height } = page.getSize();

  //get static element
  const nameFieldID = "#/properties/richiedente/properties/family_name2-input";
  const nameLabel = "Name";

  const nameField = form.createTextField(nameLabel);
  nameField.setText(getDomElByJSONSchemaField(nameFieldID));
  nameField.addToPage(page, { x: 55, y: 640 });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "application/pdf");
  // const containerInnerHTML = document.querySelector("#ciao")!.innerHTML;
  // const ref = ReactDOMServer.renderToString(containerInnerHTML);
  // console.log(containerInnerHTML);
};

export const App = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <HeaderBar className="App-header" />
      <Container>
        <JsonFormsDispatch />
        <QRCode display={isVisible} toggle={() => setVisible(!isVisible)} />
        <Button color="primary" icon={false} tag="button">
          Save
        </Button>{" "}
        <Button color="secondary" icon={false} tag="button">
          Reset
        </Button>{" "}
        <Button
          color="secondary"
          icon={false}
          tag="button"
          onClick={() => setVisible(!isVisible)}
        >
          Show/Hide QRCode
        </Button>{" "}
        <Button color="secondary" icon={false} tag="button" onClick={getPDF}>
          Get PDF
        </Button>{" "}
      </Container>
    </div>
  );
};
