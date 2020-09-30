import React from "react";
// import { render } from "@testing-library/react";
import { App } from "./App";
import { render, fireEvent, screen } from '../test-utils';


describe("render components", ()=> {
  it("renders welcome message", () => {
    const { getByText } = render(<App />);
    expect(getByText("Ente appartenenza/Owner")).toBeInTheDocument();
  });

  it("renders login button", () => {
    const { getByText } = render(<App />);
    expect(getByText("Accedi all'area personale")).toBeInTheDocument();
  });

  it("renders form buttons", () => {
    const { getByText } = render(<App />);
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Reset")).toBeInTheDocument();
  });
});
