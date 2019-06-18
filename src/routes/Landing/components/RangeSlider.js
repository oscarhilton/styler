import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class RangeSlider extends PureComponent {
  render() {
    const { title, min, max, styleName, styleUnit, state, handleChange, step } = this.props;
    return (
      <div>
        <div>{title}</div>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={parseInt(state[styleName], 10)}
          onChange={e => handleChange(e, styleName, styleUnit)}
          step={step || 1}
        />
      </div>
    );
  }
}

RangeSlider.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  styleUnit: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
