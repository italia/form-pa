import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import { render } from "test-utils";
import { Footer } from "./Footer";
import localStore from "../redux/store";
import { setFormData } from "../redux/actions";

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

describe("buttons click handler", () => {
  it("reset form action", () => {
    const store = localStore;
    store.dispatch(
      setFormData({
        data: { richiedente: { given_name: "Reset" } },
      })
    );

    const { getByText } = render(<Footer />);
    fireEvent(
      getByText("Reset"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(store.getState()).toEqual({ form: { data: {} } });
  });
});
