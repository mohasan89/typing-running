import { LOAD_TEXT, SUCCESS_TEXT, ERROR_TEXT } from "../constants/loadingText";

export const textLoadingReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case LOAD_TEXT:
      return { loading: true };
    case SUCCESS_TEXT:
      return { loading: false, text: action.payload };
    case ERROR_TEXT:
      return { loading: false, error: true };
    default:
      return state;
  }
};
