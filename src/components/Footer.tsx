import React, { useState } from "react";
import { Button } from "design-react-kit";
import QRCode from "./QRCode";

export const Footer = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="pb-3">
      <QRCode display={isVisible} toggle={() => setVisible(!isVisible)} />
      <Button color="primary" icon={false} tag="button">
        Savess
      </Button>{" "}
      <Button color="secondary" icon={false} tag="button">
        Reset
      </Button>{" "}
      <Button
        color="secondary"
        icon={false}
        tag="button"
        onClick={() => setVisible(!isVisible)}
      >
        Show/Hide QRCode
      </Button>{" "}
    </div>
  );
};
