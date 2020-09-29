import React from "react";
import Qr from "qrcode.react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const qrCode = ({data}: any) => {
  const string = JSON.stringify(data);
  // size will be minimum 128, maximum 512
  const size =
    (string.length / 100) * 128 < 128
      ? 128
      : (string.length / 100) * 128 > 512
      ? 512
      : (string.length / 100) * 128;

  return <Qr value={string} size={size} />;
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
