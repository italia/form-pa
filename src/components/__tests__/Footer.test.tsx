import {
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import { render } from "test-utils";
import { Footer } from "../Footer";
import localStore from "../../redux/store";
import { setFormData } from "../../redux/actions";

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
    expect(queryByText(QRCodeText)).not.toBeInTheDocument();
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

describe("render modals", () => {
  const toggleQRCode = "Show/Hide QRCode";
  const saveButtonText = "Save";

  it("renders review modal", async () => {
    const { getByText } = render(<Footer />);
    const saveButton = getByText(saveButtonText);
    userEvent.click(saveButton);
    expect(await screen.findByTestId("review-modal")).toBeInTheDocument();
  });

  it('closes the review modal on Close button click', async () => {
    render(<Footer />);
    const saveButton = await screen.findByTestId('review-modal-button');
    userEvent.click(saveButton);
    expect(screen.queryByTestId('review-modal')).toBeInTheDocument();
    expect(screen.getByTestId('close-review-modal')).toBeInTheDocument();
    const closeButton = await screen.findByTestId('close-review-modal');
    userEvent.click(closeButton);
    await waitForElementToBeRemoved(() => screen.queryByTestId('review-modal'));
    expect(screen.queryByTestId('review-modal')).not.toBeInTheDocument();
  });
});
