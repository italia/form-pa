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

import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
} from "design-react-kit";

import React from "react";
export interface Props {
  readonly className: string | undefined;
}

export const HeaderBar = (props: Props): JSX.Element => (
  <Header small={true} theme="" type="slim" className={props.className}>
    <HeaderContent>
      <HeaderBrand responsive tag="a">
        Ente appartenenza/Owner
      </HeaderBrand>
      <HeaderRightZone>
        <a href="https://github.com/italia/form-pa" target="_blank">
          <Icon
            color="white"
            className="p-2 d-none d-md-block"
            icon="it-github"
            padding={false}
            size="lg"
          />
        </a>
      </HeaderRightZone>
    </HeaderContent>
  </Header>
);
