import { ControlElement } from "@jsonforms/core";
import * as React from "react";
import ReactMarkdown from "react-markdown";

interface MyProps {
  readonly uischema: ControlElement;
}
export class Markdown extends React.Component<MyProps> {
  render() {
    return (
      typeof this.props.uischema.label === "string" && (
        <div>
          <ReactMarkdown source={this.props.uischema.label} />
        </div>
      )
    );
  }
}
