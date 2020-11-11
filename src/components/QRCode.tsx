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

const ResponsiveSvgWrapper = styled.div`
  & > svg {
    display: block; /* svg is "inline" by default */
    height: auto; /* reset height */
    width: 100%; /* reset width */
  }
`;

interface Props {
  toggle: any;
  data: string;
  display: boolean;
}

const QRCode = ({ data, display, toggle }: Props) => {
  const string = JSON.stringify(data);

  return (
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
        QRCode
      </ModalHeader>
      <ModalBody tag="div">
        <ResponsiveSvgWrapper>
          <Qr renderAs="svg" value={string} />
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

const mapStateToProps = (state: any) => {
  return {
    data: state.jsonforms?.core?.data,
  };
};

const QRCodeConnected = connect(mapStateToProps)(QRCode);

export default QRCodeConnected;
