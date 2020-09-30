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
    <Modal isOpen={display == "block" ? true : false} toggle={toggle}>
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
