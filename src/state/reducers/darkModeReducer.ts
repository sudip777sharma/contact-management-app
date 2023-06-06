import { darkModeType } from "../../types/type";
import { TOGGLE_DARK_MODE } from "../action-creators/darkModeActions";

const initialState: darkModeType = false;

const darkModeReducer = (state = initialState, action: any): darkModeType => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
