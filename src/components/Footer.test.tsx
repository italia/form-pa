import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import { render } from "test-utils";
import { Footer } from "./Footer";

describe("render components", () => {
  const toggleQRCode = "Show/Hide QRCode";
  it("renders form buttons", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Reset")).toBeInTheDocument();
    expect(getByText(toggleQRCode)).toBeInTheDocument();
  });

  it("toggle modal clicking on show QRCode", async () => {
    const { getByText, queryByText } = render(<Footer />);
    const QRCodeText = "QRCode";

    // check if it is closed
    expect(queryByText(QRCodeText)).not.toBeInTheDocument();
    const btnQR = getByText(toggleQRCode);
    // opening modal
    fireEvent(
      btnQR,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => {
      expect(queryByText(QRCodeText)).toBeInTheDocument();
    });
    // closing modal
    fireEvent(
      btnQR,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitForElementToBeRemoved(() => queryByText(QRCodeText));
  });
});
