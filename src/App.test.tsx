/* form-pa: Send forms to PAs with SPID
 * Copyright (C) 2020 Dipartimento per la Trasformazione Digitale
 *                    Presidenza del Consiglio dei Ministri

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
// import { render } from "@testing-library/react";
import { App } from "./App";
// @ts-ignore
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
    expect(getByText("Show/Hide QRCode")).toBeInTheDocument();
  });
});
