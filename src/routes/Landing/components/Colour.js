import React, { Component } from "react";
import PropTypes from "prop-types";
import { PhotoshopPicker } from "react-color";

export default class Colour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colourOpen: false,
      originalColour: props.hex,
      background: props.background,
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.handleToggleColourPicker = this.handleToggleColourPicker.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  render() {
    return (
      <div className="Colour">
        {this.state.colourOpen && (
          <div className="Colour__picker">
            <PhotoshopPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
              onAccept={this.handleAccept}
              onCancel={this.handleCancel}
              header={`Editing "${this.props.name}"`}
            />
          </div>
        )}
        <div
          className="BrandColours__colours__colour"
          style={{ background: this.state.background }}
          onClick={this.handleToggleColourPicker}
        >
          <span className="BrandColours__colours__colour__title">
            ${this.props.name
              .split(" ")
              .join("-")
              .toLowerCase()}
            <br />
            {this.state.background}
          </span>
        </div>
      </div>
    );
  }

  handleChangeComplete(colour) {
    this.setState({ background: colour.hex });
  }

  handleAccept() {
    const { setColour, index } = this.props;
    console.log(index);
    this.setState({ colourOpen: false }, setColour(index, this.state.background));
  }

  handleCancel() {
    const { setColour, index } = this.props;
    console.log(index);
    this.setState(
      { background: this.state.originalColour, colourOpen: false },
      setColour(index, this.state.originalColour)
    );
  }

  handleToggleColourPicker() {
    this.setState({ colourOpen: !this.state.colourOpen });
  }
}

Colour.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  setColour: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
