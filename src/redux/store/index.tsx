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

/* eslint-disable @typescript-eslint/ban-types */
import { createStore, StoreEnhancer } from "redux";
import rootReducer from "../reducers";

type WindowWithDevTools = Window & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>;
};

const isReduxDevtoolsExtenstionExist = (
  arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => "__REDUX_DEVTOOLS_EXTENSION__" in arg;

const store = createStore(
  rootReducer,
  isReduxDevtoolsExtenstionExist(window)
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default store;
