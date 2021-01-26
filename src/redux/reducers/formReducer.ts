import { SET_FORM_DATA } from "../actions/actionTypes";
import { FormDataAction } from "../actions/types";

const initialState = {
  data: {},
};

export default (state = initialState, action: FormDataAction) => {
  if (action.type === SET_FORM_DATA) {
    return {
      data: action.payload.data,
    };
  }

  return state;
};
