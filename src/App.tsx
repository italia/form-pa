import React, { useState } from "react";
import "./App.css";

import { HeaderBar } from "./components/HeaderBar";
import { JsonFormsDispatch } from "@jsonforms/react";
import { Button, Container } from "design-react-kit";
import QRCode from "./components/QRCode";
import { useStore } from "react-redux";
import { getPDF } from "./pdf";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web/index.css";
import "typeface-roboto-mono/index.css";
import "typeface-lora/index.css";

export const App = () => {
  const [isVisible, setVisible] = useState(false);
  const store = useStore();

  return (
    <div className="App">
      <HeaderBar className="App-header" />
      <Container id={"container"}>
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
        <Button
          color="secondary"
          icon={false}
          tag="button"
          onClick={() => getPDF(store)}
        >
          Get PDF
        </Button>{" "}
      </Container>
    </div>
  );
};
