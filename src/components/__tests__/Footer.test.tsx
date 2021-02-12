import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { render } from "test-utils";
import { Footer } from "../Footer";
import localStore from "../../redux/store";
import { setFormData } from "../../redux/actions";

const saveButtonTestID = "review-modal-button";
const qrButtonTestID = "qr-modal-button";
const resetButtonTestID = "reset-button";

describe("render components", () => {
  it("renders form buttons", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId(saveButtonTestID)).toBeInTheDocument();
    expect(getByTestId(resetButtonTestID)).toBeInTheDocument();
    expect(getByTestId(qrButtonTestID)).toBeInTheDocument();
  });
});

describe("render modals", () => {
  const reviewModalTestID = "review-modal";
  const qrModalTestID = "qr-modal";

  it("renders qr modal", async () => {
    const { getByTestId } = render(<Footer />);
    const qrButton = getByTestId(qrButtonTestID);
    userEvent.click(qrButton);
    expect(await screen.findByTestId(qrModalTestID)).toBeInTheDocument();
  });

  it("closes the qr modal on Close button click", async () => {
    render(<Footer />);
    const qrButton = await screen.findByTestId(qrButtonTestID);
    userEvent.click(qrButton);
    expect(screen.queryByTestId(qrModalTestID)).toBeInTheDocument();
    expect(screen.getByTestId("close-qr-modal")).toBeInTheDocument();
    const closeButton = await screen.findByTestId("close-qr-modal");
    userEvent.click(closeButton);
    await waitForElementToBeRemoved(() => screen.queryByTestId(qrModalTestID));
    expect(screen.queryByTestId(qrModalTestID)).not.toBeInTheDocument();
  });

  it("renders review modal", async () => {
    const { getByTestId } = render(<Footer />);
    const saveButton = getByTestId(saveButtonTestID);
    userEvent.click(saveButton);
    expect(await screen.findByTestId(reviewModalTestID)).toBeInTheDocument();
  });

  it("closes the review modal on Close button click", async () => {
    render(<Footer />);
    const saveButton = await screen.findByTestId(saveButtonTestID);
    userEvent.click(saveButton);
    expect(screen.queryByTestId(reviewModalTestID)).toBeInTheDocument();
    expect(screen.getByTestId("close-review-modal")).toBeInTheDocument();
    const closeButton = await screen.findByTestId("close-review-modal");
    userEvent.click(closeButton);
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId(reviewModalTestID)
    );
    expect(screen.queryByTestId(reviewModalTestID)).not.toBeInTheDocument();
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

    const { getByTestId } = render(<Footer />);
    userEvent.click(getByTestId(resetButtonTestID));
    expect(store.getState()).toEqual({ form: { data: {} } });
  });
});
