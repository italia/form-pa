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

import { Actions, jsonformsReducer } from "@jsonforms/core";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { combineReducers, createStore } from "redux";
import MarkdownControl from "../renderers/MarkdownControl";
import markdownControlTester from "../renderers/markdownControlTester";


const store = createStore(combineReducers({ jsonforms: jsonformsReducer() }), {
  jsonforms: {
    cells: materialCells,
    renderers: materialRenderers,
  },
});



// Register custom renderer for the Redux tab
store.dispatch(Actions.registerRenderer(markdownControlTester, MarkdownControl));

export default store;