import React, { useState } from "react";
import { Button } from "design-react-kit";
import { useDispatch, useSelector } from "react-redux";
import Types from "MyTypes";
import { setFormData, submitFormData } from "../redux/actions";
import QRCodeConnected from "./QRCodeConnected";

export const Footer = (): JSX.Element => {
  const [isVisible, setVisible] = useState(false);
  const jsonformsData = useSelector(
    (state: Types.RootState) => state.form?.data
  );

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(submitFormData(jsonformsData));
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
        display={isVisible}
        toggle={(): void => setVisible(!isVisible)}
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
        onClick={(): void => setVisible(!isVisible)}
      >
        Show/Hide QRCode
      </Button>{" "}
    </div>
  );
};
