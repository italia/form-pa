import React from "react";
import { render } from "test-utils";
import { HeaderBar } from "../HeaderBar";

describe("render components", () => {
  it("renders headerbar", async () => {
    const { getByText } = render(<HeaderBar className="App-header" />);
    expect(getByText("Ente appartenenza/Owner")).toBeInTheDocument();
  });
});
