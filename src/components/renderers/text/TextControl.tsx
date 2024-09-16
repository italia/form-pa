import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { Input } from "design-react-kit";

interface TextControlProps extends ControlProps {
  readonly data: string;
  readonly path: string;
  readonly handleChange: (path: string, value: string) => void;
}

const TextControl = ({
  label,
  description,
  data,
  handleChange,
  path,
}: TextControlProps) => {
  const labeld = label?.toString();
  return (
    <Input
      label={labeld}
      type="text"
      placeholder={description}
      value={data || ""}
      onChange={(v: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(path, v.target.value)
      }
    />
  );
};

export default withJsonFormsControlProps(TextControl);
