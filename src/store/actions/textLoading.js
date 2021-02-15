import axios from "axios";

import { LOAD_TEXT, SUCCESS_TEXT, ERROR_TEXT } from "../constants/loadingText";
import { RESET_LETTER } from "../constants/inputLetter";

export const loadText = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_TEXT });
    const { data } = await axios.get(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1&starts-with=1"
    );
    dispatch({ type: SUCCESS_TEXT, payload: data[0] });
    dispatch({
      type: RESET_LETTER,
      payload: {
        accuracyVal: 100 / data[0].length,
        activeLetter: data[0][0],
      },
    });
  } catch (err) {
    dispatch({ type: ERROR_TEXT });
  }
};
