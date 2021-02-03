import { JsonFormsInitStateProps } from "@jsonforms/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions";
import { loadSchema } from "../schemaLoader";

export const useFormParams = () => {
  const [formParam, setFormParam] = useState<JsonFormsInitStateProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const param = await loadSchema();
      setFormParam(param);
      dispatch(setFormData({ data: param?.data }));
    };
    void fetchData();
  }, []);

  return [formParam] as const;
};
