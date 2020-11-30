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
  Col,
  Button,
  DropdownToggle,
  LinkListItem,
  DropdownMenu,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
  LinkList,
  Row,
  UncontrolledDropdown,
} from "design-react-kit";

import React from "react";

export interface Props {
  className: string | undefined;
}

export const HeaderBar = (props: Props) => {
  return (
    <Header small={false} theme="" type="slim" className={props.className}>
      <HeaderContent>
        <HeaderBrand responsive tag="a">
          Ente appartenenza/Owner
        </HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle aria-haspopup caret color="secondary" nav>
              ITA
              <Icon color="" icon="it-expand" padding={false} size="" />
            </DropdownToggle>
            <DropdownMenu flip tag="div">
              <Row tag="div">
                <Col
                  size="12"
                  tag="div"
                  widths={["xs", "sm", "md", "lg", "xl"]}
                >
                  <LinkList tag="div">
                    <LinkListItem href="#">
                      {/* tag={function noRefCheck() {}} */}
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button
            className="btn-icon"
            color="primary"
            href="#"
            icon={false}
            size="full"
            tag="button"
          >
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" padding={false} size="" />
            </span>
            <span className="d-none d-lg-block">Accedi all'area personale</span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

// export default HeaderBar;
