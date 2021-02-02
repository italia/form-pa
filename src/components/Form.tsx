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

import { useDispatch } from "react-redux";
import { JsonForms } from "@jsonforms/react";
import { JsonFormsCore } from "@jsonforms/core";
import { useSelector } from "react-redux";
import Types from "MyTypes";
import { useFormParams } from "../hooks/useFormParams";
import { setFormData } from "../redux/actions";

export const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const [formParam] = useFormParams();
  const jsonformsData = useSelector(
    (state: Types.RootState) => state.form?.data
  );

  const handleFormData = (d: JsonFormsCore) => {
    dispatch(setFormData(d));
  };

  return (
    <JsonForms
      cells={formParam?.cells}
      schema={formParam?.schema}
      uischema={formParam?.uischema}
      data={jsonformsData}
      renderers={formParam?.renderers || []}
      onChange={handleFormData}
    />
  );
};
