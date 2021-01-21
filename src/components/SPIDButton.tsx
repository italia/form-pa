import React from "react";
import SPID from "spid-smart-button/dist/spid-button-umd.js";

interface ExtraProviders {
  readonly protocols: ReadonlyArray<string>;
  readonly entityName: string;
  readonly entityID: string;
  readonly active: boolean;
}
interface SPIDConfig {
  readonly lang?: string;
  readonly selector?: string;
  readonly method?: string;
  readonly protocol?: string;
  readonly size?: string;
  readonly url?: string;
  readonly fieldName?: string;
  readonly extraFields?: {
    readonly [key: string]: string;
  };
  readonly mapping: {
    readonly [key: string]: number | string;
  };
  readonly supported: ReadonlyArray<string>;
  readonly extraProviders: ReadonlyArray<ExtraProviders>;
}

interface Props {
  readonly spidConfig: SPIDConfig;
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
