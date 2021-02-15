import React, { useState } from "react";
import { Button } from "design-react-kit";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import Types from "MyTypes";
import { setFormData, submitFormData } from "../redux/actions";
import QRCodeConnected from "./QRCodeConnected";
import { ReviewModal } from "./ReviewModal";

interface FooterProps {
  readonly formRef: React.RefObject<HTMLDivElement>;
}

export const Footer = ({ formRef }: FooterProps): JSX.Element => {
  const [isQrModalVisible, setQrModalVisible] = useState(false);
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const jsonformsData = useSelector(
    (state: Types.RootState) => state.form?.data
  );

  const handlePrint = useReactToPrint({
    content: () => formRef.current,
  });

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(submitFormData(jsonformsData));
    setReviewModalVisible(!isReviewModalVisible);
  };
  const clearData = () => {
    dispatch(
      setFormData({
        data: {},
      })
    );
  };
  return (
    <div className="pb-3 float-right">
      <QRCodeConnected
        display={isQrModalVisible}
        toggle={(): void => setQrModalVisible(!isQrModalVisible)}
      />
      <ReviewModal
        display={isReviewModalVisible}
        toggle={(): void => setReviewModalVisible(!isReviewModalVisible)}
      />
      <Button
        outline
        color="primary"
        icon={false}
        tag="button"
        onClick={clearData}
        data-testid="reset-button"
      >
        Cancella tutto
      </Button>{" "}
      <Button
        outline
        color="primary"
        icon={false}
        tag="button"
        data-testid="print-button"
        onClick={handlePrint}
      >
        Stampa
      </Button>{" "}
      <Button
        outline
        color="primary"
        icon={false}
        tag="button"
        onClick={(): void => setQrModalVisible(!isQrModalVisible)}
        data-testid="qr-modal-button"
      >
        Scarica QR Code
      </Button>{" "}
      <Button
        color="primary"
        icon={false}
        tag="button"
        onClick={handleSubmit}
        data-testid="review-modal-button"
      >
        Save
      </Button>{" "}
    </div>
  );
};
