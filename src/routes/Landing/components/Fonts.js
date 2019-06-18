import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Fonts extends Component {
  render() {
    console.log(this.props.fonts);
    return (
      <div className="BrandColours">
        <div className="BrandColours__title">
          <h3>Fonts</h3>
        </div>
        <div>
          {this.props.fonts.map(font => (
            <div>
              <span style={{ fontFamily: font }}>{font}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Fonts.propTypes = {
  fonts: PropTypes.array,
};
