import React from "react";
import { spidConfig } from "../config";
import SPIDButton from "./SPIDButton";

export const TitleBar = () => (
  <div>
    <div className="d-flex justify-content-between">
      <div className="pl-2 flex-column">
        <h1>Titolo</h1>
        <h2 className="h6 font-weight-light">sottotitlo</h2>
      </div>
      <div className="d-flex flex-column align-items-end pr-3">
        <h2 className="h6 font-weight-light text-uppercase">
          Vuoi compilare più velocemente?
        </h2>
        <SPIDButton spidConfig={spidConfig} />
      </div>
    </div>
  </div>
);
