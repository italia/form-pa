import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlElement } from "@jsonforms/core";
import { Markdown } from "./Markdown";

interface MarkdownControlProps {
  readonly uischema: ControlElement;
}

const MarkdownControl = ({ uischema }: MarkdownControlProps) => (
  <Markdown uischema={uischema} />
);

export default withJsonFormsControlProps(MarkdownControl);
