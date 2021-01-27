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
import { cleanup, screen, waitFor } from "@testing-library/react";
import { Generate, JsonSchema7 } from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { act } from "react-dom/test-utils";
import { JsonForms } from "@jsonforms/react";
import { render } from "test-utils";
import { Form } from "./components/Form";

afterEach(cleanup);

const schema: JsonSchema7 = {
  properties: {
    foo: {
      minLength: 5,
      type: "string",
    },
  },
  required: ["foo"],
  type: "object",
};

const uischema = Generate.uiSchema(schema);
const formParam = {
  cells: materialCells,
  data: {},
  renderers: materialRenderers,
  schema,
  uischema,
};

jest.mock("./hooks/useFormParams", () => ({
  useFormParams: () => [formParam],
}));

describe("render components", () => {
  it.skip("renders form", async () => {
    const { getByText } = render(<Form />);
    // const { getByText } = render(<JsonForms {...formParam} />);

    expect(getByText(/Foo/)).toBeInTheDocument();
  });
  it.skip("as", async () => {
    await act(async () => {
      render(
        <JsonForms data={{}} schema={schema} renderers={materialRenderers} />
      );
    });
    await waitFor(() => {
      expect(screen.getByText(/Foo/)).toBeInTheDocument();
    });
  });
});
