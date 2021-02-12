import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlElement } from "@jsonforms/core";
import { Input } from "design-react-kit";

interface TextControlProps {
  readonly uischema: ControlElement;
}

const TextControl = ({ uischema }: TextControlProps) => {
  const label = uischema.label?.toString();
  return (
    // <Text uischema={uischema} />
    <Input label={label} type="text" placeholder={label} />
  );
};

export default withJsonFormsControlProps(TextControl);
