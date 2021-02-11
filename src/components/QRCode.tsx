import React from "react";
import Qr from "qrcode.react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "design-react-kit";
import { createUseStyles } from "react-jss";
import Types from "MyTypes";

const useStyles = createUseStyles({
  div: {
    display: "block" /* svg is "inline" by default */,
    height: "auto" /* reset height */,
    width: "100%" /* reset width */,
  },
});

interface Props extends Types.FormState {
  readonly toggle: () => void;
  readonly display: boolean;
}

const QRCode = ({ data, display, toggle }: Props): JSX.Element => {
  const str = JSON.stringify(data);
  const classes = useStyles();

  return (
    <Modal
      isOpen={display}
      toggle={toggle}
      role="dialog"
      data-testid="qr-modal"
    >
      <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
        QRCode
      </ModalHeader>
      <ModalBody tag="div">
        <Qr className={classes.div} renderAs="svg" value={str} />
      </ModalBody>
      <ModalFooter tag="div">
        <Button
          color="secondary"
          icon={false}
          tag="button"
          onClick={toggle}
          data-testid="close-qr-modal"
        >
          Chiudi
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default QRCode;
