import { CORRECT_LETTER, ERROR_LETTER } from "../constants/inputLetter";

export const letterInput = (letter) => (dispatch, getState) => {
  const { activeLetter, error, letterIndex } = getState().letterInput;
  const { keyCode } = letter;
  if (
    (keyCode > 64 && keyCode < 91) ||
    (keyCode >= 188 && keyCode <= 190) ||
    keyCode === 8 ||
    keyCode === 59 ||
    keyCode === 222 ||
    keyCode === 32
  ) {
    if (activeLetter === letter.key) {
      dispatch({ type: CORRECT_LETTER, payload: getState().testText.text[letterIndex + 1] });
    } else if (!error) {
      dispatch({ type: ERROR_LETTER });
    }
  }
};
