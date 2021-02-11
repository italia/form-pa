import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "design-react-kit";
import { useSelector } from "react-redux";
import Types from "MyTypes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  reviewModal: {
    margin: "0 !important",
    minWidth: "100% !important",
  },
});

interface Props {
  readonly toggle: () => void;
  readonly display: boolean;
}

export const ReviewModal = ({ display, toggle }: Props): JSX.Element => {
  const classes = useStyles();
  const jsonformsData = useSelector(
    (state: Types.RootState) => state.form?.data
  );
  return (
    <Modal
      className={classes.reviewModal}
      isOpen={display}
      role="dialog"
      toggle={toggle}
      data-testid="review-modal"
    >
      <ModalHeader charCode={215} closeAriaLabel="Close" tag="h5" wrapTag="div">
        Rivedi e invia
      </ModalHeader>
      <ModalBody>{JSON.stringify(jsonformsData)}</ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={toggle}
          data-testid="close-review-modal"
        >
          Chiudi
        </Button>
        <Button color="primary">Invia</Button>
      </ModalFooter>
    </Modal>
  );
};
