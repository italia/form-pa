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
import Qr from "qrcode.react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "design-react-kit";
import styled from "styled-components";
import { JsonFormsState } from "@jsonforms/core";

const ResponsiveSvgWrapper = styled.div`
  & > svg {
    display: block; /* svg is "inline" by default */
    height: auto; /* reset height */
    width: 100%; /* reset width */
  }
`;

interface Props {
  readonly toggle: () => void;
  readonly data: string;
  readonly display: boolean;
}

const QRCode = ({ data, display, toggle }: Props): JSX.Element => {
  const str = JSON.stringify(data);

  return (
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
        QRCode
      </ModalHeader>
      <ModalBody tag="div">
        <ResponsiveSvgWrapper>
          <Qr renderAs="svg" value={str} />
        </ResponsiveSvgWrapper>
      </ModalBody>
      <ModalFooter tag="div">
        <Button color="secondary" icon={false} tag="button" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state: JsonFormsState) => ({
  data: state.jsonforms?.core?.data,
});

const QRCodeConnected = connect(mapStateToProps)(QRCode);

export default QRCodeConnected;
