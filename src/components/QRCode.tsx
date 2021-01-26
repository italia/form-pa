import React from "react";
import Qr from "qrcode.react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "design-react-kit";
import styled from "styled-components";
import Types from "MyTypes";

const ResponsiveSvgWrapper = styled.div`
  & > svg {
    display: block; /* svg is "inline" by default */
    height: auto; /* reset height */
    width: 100%; /* reset width */
  }
`;

interface Props extends Types.FormState {
  readonly toggle: () => void;
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

export default QRCode;
