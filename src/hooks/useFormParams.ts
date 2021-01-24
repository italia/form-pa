import { JsonFormsInitStateProps } from "@jsonforms/react";
import { useEffect, useState } from "react";
import { loadSchema } from "../schemaLoader";

export const useFormParams = () => {
  const [formParam, setFormParam] = useState<JsonFormsInitStateProps>();
  const [formData, setFormData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setFormParam(await loadSchema());
    };
    void fetchData();
  }, []);

  return [formParam, setFormData] as const;
};
