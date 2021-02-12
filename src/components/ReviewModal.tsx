import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "design-react-kit";

interface Props {
  readonly toggle: () => void;
  readonly display: boolean;
}

export const ReviewModal = ({ display, toggle }: Props): JSX.Element => (
  <Modal
    isOpen={display}
    role="dialog"
    toggle={toggle}
    data-testid="review-modal"
  >
    <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
      Conferma invio
    </ModalHeader>
    <ModalBody>I dati inseriti sono corretti?</ModalBody>
    <ModalFooter>
      <Button
        color="secondary"
        onClick={toggle}
        data-testid="close-review-modal"
      >
        Modifica
      </Button>
      <Button color="primary">Invia</Button>
    </ModalFooter>
  </Modal>
);
