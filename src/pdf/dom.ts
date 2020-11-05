import { Fields } from "./field";

export const getDomElByJSONSchemaField = (elID: string): string => {
  return (document.getElementById(elID) as HTMLInputElement)?.value;
};
export const getDomElLabelByID = (elID: string): string => {
  return (document.querySelector(`[for="${elID}"]`) as HTMLInputElement)?.innerHTML;
};

export const getAllDomFields = (): Fields => {
  const allInputs = document.getElementsByTagName("input");

  let fields: Fields = [];
  for (let index = 0; index < allInputs.length; ++index) {
    let label = "",
      el;
    try {
      el = document.querySelector(
        `[for="${allInputs[index].id}"]`
      ) as HTMLDivElement;
      label = el.innerHTML;
      fields.push({ scope: allInputs[index].id, label });
    } catch {
      el = null;
    }
  }
  return fields;
};
