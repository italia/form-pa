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

import { JsonForms } from "@jsonforms/react";
import { useFormParams } from "../hooks/useFormParams";

export const Form = (): JSX.Element => {
  const [formParam] = useFormParams();

  return (
    <JsonForms
      cells={formParam?.cells}
      schema={formParam?.schema}
      uischema={formParam?.uischema}
      data={formParam?.data || {}}
      renderers={formParam?.renderers || []}
      onChange={({ data }) => null}
    />
  );
};
