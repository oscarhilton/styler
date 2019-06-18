import defaultReducer from "../utils/defaultReducer";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

export const initialState = fromJS({
  resizePanel: {},
  styles: {},
  colours: [
    {
      name: "Black",
      hex: "#000",
    },
    {
      name: "White",
      hex: "#fff",
    },
  ],
});

export const hanldeSetNewStyle = (state, action) => {
  return state.setIn(["styles", action.payload.element], action.payload.style);
};

export const hanldeSetColour = (state, action) => {
  const colour = state.getIn(["colours", action.payload.index]);
  return state.setIn(["colours", action.payload.index], { name: colour.name, hex: action.payload.hex });
};

export const handleNewColour = (state, action) => {
  const oldColours = state.get("colours");
  const newColours = oldColours.push({ name: `colour-${oldColours.toJS().length + 1}`, hex: "#000000" });
  return state.set("colours", newColours);
};

export const handleResizePanel = (state, action) => {
  return state.set("resizePanel", action.payload);
};

const actionHandlers = {
  [actionTypes.SET_NEW_STYLE]: hanldeSetNewStyle,
  [actionTypes.SET_COLOUR]: hanldeSetColour,
  [actionTypes.ADD_COLOUR]: handleNewColour,
  [actionTypes.RESIZE_PANEL]: handleResizePanel,
};

const reducer = (state = initialState, action) => defaultReducer(state, action, actionHandlers);
export default reducer;
