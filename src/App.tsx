import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import { JsonFormsDispatch } from "@jsonforms/react";
// @ts-ignore
import { Button, Container} from "design-react-kit";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

function App() {
  return (
    <div className="App">
      <HeaderBar className="App-header"/>
      <Container>
        <JsonFormsDispatch />
        <Button color="primary" icon={false} tag="button">
          Save
        </Button>
        <Button color="secondary" icon={false} tag="button">
          Reset
        </Button>
      </Container>
    </div>
  );
}

export default App;
