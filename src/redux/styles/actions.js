import * as actionTypes from "./actionTypes";

export const setNewSyle = (element, style) => ({
  type: actionTypes.SET_NEW_STYLE,
  payload: {
    element,
    style,
  },
});

export const setColour = (index, hex) => ({
  type: actionTypes.SET_COLOUR,
  payload: {
    index,
    hex,
  },
});

export const addColour = () => ({
  type: actionTypes.ADD_COLOUR,
});

export const resizePanel = panelObj => ({
  type: actionTypes.RESIZE_PANEL,
  payload: panelObj,
});
