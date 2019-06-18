import React, { Component } from "react";
import PropTypes from "prop-types";
import PanelGroup from "react-panelgroup";
import Styler from "./Styler";
import Dummy from "./Dummy";

export default class Landing extends Component {
  render() {
    const { fullStyles, setNewStyle, setColour, brandColours, addColour, usedFonts } = this.props;
    const styleProps = {
      fullStyles,
      setNewStyle,
      setColour,
      brandColours,
      addColour,
      usedFonts,
    };
    return (
      <PanelGroup direction="row" borderColor="grey">
        <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
          <Styler {...styleProps} />
        </div>
        <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
          <Dummy fullStyles={fullStyles} />
        </div>
      </PanelGroup>
    );
  }
}

Landing.propTypes = {
  fullStyles: PropTypes.array.isRequired,
  setNewStyle: PropTypes.func.isRequired,
  setColour: PropTypes.func.isRequired,
  brandColours: PropTypes.array.isRequired,
  addColour: PropTypes.func.isRequired,
  usedFonts: PropTypes.array.isRequired,
  panel: PropTypes.object.isRequired,
  resizePanel: PropTypes.func.isRequired,
};
