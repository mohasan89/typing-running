import { RESET_LETTER, CORRECT_LETTER, ERROR_LETTER } from "../constants/inputLetter";

export const inputReducer = (
  state = { letterIndex: 0, accuracy: 100, startTime: null },
  action
) => {
  switch (action.type) {
    case CORRECT_LETTER:
      return {
        ...state,
        letterIndex: state.letterIndex + 1,
        error: false,
        activeLetter: action.payload,
        startTime: state.letterIndex === 0 && !state.startTime ? Date.now() : state.startTime,
      };
    case ERROR_LETTER:
      return {
        ...state,
        error: true,
        accuracy: state.accuracy - state.accuracyVal,
        startTime: state.letterIndex === 0 && !state.startTime ? Date.now() : state.startTime,
      };
    case RESET_LETTER:
      return {
        letterIndex: 0,
        accuracy: 100,
        accuracyVal: action.payload.accuracyVal,
        activeLetter: action.payload.activeLetter,
        startTime: null,
      };
    default:
      return state;
  }
};
