import React from "react";
import SPID from "spid-smart-button/dist/spid-button-umd.js";

interface Props {
  spidConfig: any;
}

class SPIDButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    SPID.init(this.props.spidConfig);
    const classes =
      "spid-button spid-button-positive spid-button-rounded spid-button-size-medium";

    // this is for an unexpected "hidden" attribute in
    // https://github.com/italia/spid-smart-button/blob/master/src/js/spid-button.js#L313
    document.getElementsByClassName(classes)[0].removeAttribute("hidden");
  }

  render() {
    return <div id="spid-button"></div>;
  }
}

export default SPIDButton;
