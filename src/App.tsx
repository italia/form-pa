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

import React, {useState} from "react";
import "./App.css";

import { HeaderBar } from "./components/HeaderBar";
import { JsonFormsDispatch } from "@jsonforms/react";
import { Button, Container } from "design-react-kit";
import QRCode from "./components/QRCode";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web/index.css";
import "typeface-roboto-mono/index.css";
import "typeface-lora/index.css";


export const App = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <HeaderBar className="App-header" />
      <Container>
        <JsonFormsDispatch />
        <QRCode display={isVisible} toggle={()=> setVisible(!isVisible)}/>
        <Button color="primary" icon={false} tag="button">
          Save
        </Button>{" "}
        <Button color="secondary" icon={false} tag="button">
          Reset
        </Button>{" "}
        <Button
          color="secondary"
          icon={false}
          tag="button"
          onClick={() => setVisible(!isVisible)}
        >
          Show/Hide QRCode
        </Button>
      </Container>
    </div>
  );
};
