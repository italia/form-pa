import { isStringControl, rankWith } from "@jsonforms/core";

export default rankWith(
  3, // increase rank as needed
  isStringControl
);
