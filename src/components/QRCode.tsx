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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "design-react-kit";

const qrCode = ({ data, display, toggle }: any) => {
  const string = JSON.stringify(data);
  // size will be minimum 128, maximum 512
  const size =
    (string.length / 100) * 128 < 128
      ? 128
      : (string.length / 100) * 128 > 512
      ? 512
      : (string.length / 100) * 128;

  return (
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
        QRCode
      </ModalHeader>
      <ModalBody tag="div">
        <Qr value={string} size={size} style={{ display: display }} />
      </ModalBody>
      <ModalFooter tag="div">
        <Button color="secondary" icon={false} tag="button" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

qrCode.propTypes = {
  props: PropTypes.any,
};

const mapStateToProps = (state: any) => {
  return {
    data: state.jsonforms?.core?.data,
  };
};

const QRCodeConnected = connect(mapStateToProps)(qrCode);

export default QRCodeConnected;
