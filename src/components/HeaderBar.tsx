// @ts-ignore
import { Col, Button, DropdownToggle, LinkListItem, DropdownMenu, Header, HeaderBrand, HeaderContent, HeaderRightZone, Icon, LinkList,  Row, UncontrolledDropdown,} from "design-react-kit";

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