import { fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { render } from "test-utils";
import { HeaderBar } from "./HeaderBar";

describe("render components", () => {
  it("renders headerbar", async () => {
    const { getByText } = render(<HeaderBar className="App-header" />);
    expect(getByText("Ente appartenenza/Owner")).toBeInTheDocument();
  });

  it("renders login button", () => {
    const { getByText } = render(<HeaderBar className="App-header" />);
    expect(getByText("Entra con SPID")).toBeInTheDocument();
  });

  it("toggle modal clicking on show SPID button", async () => {
    const { getByText, queryByText, getByLabelText } = render(
      <HeaderBar className="App-header" />
    );
    const modalText = "Scegli il tuo provider SPID";
    const btnText = "Entra con SPID";

    // check if it is closed
    expect(queryByText(modalText)).not.toBeVisible();
    const btnQR = getByText(btnText);
    // opening modal
    fireEvent(
      btnQR,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => {
      expect(queryByText(btnText)).toBeVisible();
    });
    // closing modal
    fireEvent(
      getByLabelText("Torna indietro"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => {
      expect(queryByText(modalText)).not.toBeVisible();
    });
  });
});
