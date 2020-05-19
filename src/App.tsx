import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { JsonFormsDispatch } from "@jsonforms/react";

import { Button } from "design-react-kit";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        {/* other markup... */}
        <JsonFormsDispatch />
        <Button color="primary" icon={false} tag="button">
          Save
        </Button>
        <Button color="secondary" icon={false} tag="button">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
