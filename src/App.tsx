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
import "./App.css";

import { Container } from "design-react-kit";
import { HeaderBar } from "./components/HeaderBar";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web/index.css";
import "typeface-roboto-mono/index.css";
import "typeface-lora/index.css";

export const App = (): JSX.Element => (
  <div className="App">
    <HeaderBar className="App-header" />
    <Container>
      <Form />
      <Footer />
    </Container>
  </div>
);
