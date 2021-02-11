import React, { useState } from "react";
import { Button } from "design-react-kit";
import { useDispatch, useSelector } from "react-redux";
import Types from "MyTypes";
import { setFormData, submitFormData } from "../redux/actions";
import QRCodeConnected from "./QRCodeConnected";
import { ReviewModal } from "./ReviewModal";

export const Footer = (): JSX.Element => {
  const [isQrModalVisible, setQrModalVisible] = useState(false);
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const jsonformsData = useSelector(
    (state: Types.RootState) => state.form?.data
  );

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
    <div className="pb-3">
      <QRCodeConnected
        display={isQrModalVisible}
        toggle={(): void => setQrModalVisible(!isQrModalVisible)}
      />
      <ReviewModal
        display={isReviewModalVisible}
        toggle={(): void => setReviewModalVisible(!isReviewModalVisible)}
      />
      <Button color="primary" icon={false} tag="button" onClick={handleSubmit}>
        Save
      </Button>{" "}
      <Button color="secondary" icon={false} tag="button" onClick={clearData}>
        Reset
      </Button>{" "}
      <Button
        color="secondary"
        icon={false}
        tag="button"
        onClick={(): void => setQrModalVisible(!isQrModalVisible)}
      >
        Show/Hide QRCode
      </Button>{" "}
    </div>
  );
};
