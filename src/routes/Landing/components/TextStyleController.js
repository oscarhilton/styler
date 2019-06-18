import React, { Component } from "react";
import PropTypes from "prop-types";
import loremIpsum from "lorem-ipsum";
import TextControls from "./TextControls";
import CSS from "./CSS";
import cn from "classnames";

class TextStyleController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        ...props.defaultStyle,
        fontFamily: props.fonts[0],
      },
      hoverStyle: {
        ...props.defaultStyle,
      },
      computedStyle: {},
      computedHoverStyle: {},
      viewControls: false,
      text: loremIpsum({
        count: props.sentences || 1,
        units: "sentences",
      }),
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.hanldeColourChange = this.hanldeColourChange.bind(this);
    this.handleFontChange = this.handleFontChange.bind(this);
    this.handlechangeTextValueRange = this.handlechangeTextValueRange.bind(this);
    this.toggleControls = this.toggleControls.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    const computedElement = document.getElementsByTagName(this.props.element)[0];
    const computedStyle = window.getComputedStyle(computedElement, null);
    const computedHoverStyle = window.getComputedStyle(computedElement, ":hover");
    const reduxStyles = { ...this.props.fullStyles[this.props.element] };

    this.setState({
      ...this.state,
      computedStyle: {
        ...computedStyle,
      },
      computedHoverStyle: {
        ...computedHoverStyle,
      },
      style: {
        ...reduxStyles,
      },
    });
  }

  render() {
    const { style } = this.state;
    const { element, number, colours, fonts, usedFonts } = this.props;

    const Element = React.createElement(
      element,
      {
        style: Object.keys(style).reduce((acc, key) => {
          return {
            ...acc,
            [key]: style[key],
          };
        }, {}),
        className: "TextStyleController__element",
      },
      this.state.text
    );

    let displayElements = [];
    const numberOfElements = number || 1;
    for (var i = 0; i < numberOfElements; i++) {
      displayElements.push(Element);
    }

    let displayStyles = [];
    for (const key of Object.keys(style)) {
      displayStyles.push({ key, value: style[key] });
    }

    const combinedStyles = { ...this.state.computedStyle, ...this.state.style };

    return (
      <div className="TextStyleController">
        <div className="TextStyleController__title">
          <h3>{element}</h3>
        </div>
        <div
          className={cn("TextStyleController__elements", {
            "TextStyleController__elements--active": this.state.viewControls,
          })}
        >
          {!!this.state.viewControls && (
            <input className="TextStyleController__changeText" onChange={this.changeText} value={this.state.text} />
          )}
          {!!this.state.viewControls && (
            <div className="TextStyleController__elements__divBlock">
              <p>
                <strong>Above element boundaries</strong>
              </p>
            </div>
          )}
          <div onClick={this.toggleControls}>{displayElements}</div>
          {!!this.state.viewControls && (
            <div className="TextStyleController__elements__divBlock">
              <p>
                <strong>Below element boundaries</strong>
              </p>
            </div>
          )}
        </div>
        {!!this.state.viewControls && (
          <div className="TextStyleController__popup">
            <div className="TextStyleController__popup__controls">
              <TextControls
                styles={combinedStyles}
                handleRangeChange={this.handleRangeChange}
                hanldeColourChange={this.hanldeColourChange}
                handleFontChange={this.handleFontChange}
                handlechangeTextValueRange={this.handlechangeTextValueRange}
                colours={colours}
                fonts={fonts}
                usedFonts={usedFonts}
              />
            </div>
            <div className="TextStyleController__popup__css">
              <CSS element={this.props.element} displayStyles={displayStyles} colours={colours} />
            </div>
          </div>
        )}
      </div>
    );
  }

  handleRangeChange(e, key, unit) {
    this.setState(
      {
        style: {
          ...this.state.style,
          [key]: `${e.target.value}${unit}`,
        },
      },
      () => this.updateReduxStore()
    );
  }

  hanldeColourChange(color, key) {
    return () => {
      this.setState(
        {
          style: {
            ...this.state.style,
            [key]: color,
          },
        },
        () => this.updateReduxStore()
      );
    };
  }

  handleFontChange(e) {
    this.setState(
      {
        ...this.state,
        style: { ...this.state.style, fontFamily: e.target.value },
      },
      () => this.updateReduxStore()
    );
  }

  toggleControls() {
    this.setState({ viewControls: !this.state.viewControls });
  }

  changeText(e) {
    this.setState(
      {
        text: e.target.value,
      },
      setTimeout(() => {
        if (this.state.text < 1) {
          this.setState({
            text: loremIpsum({
              count: this.props.sentences || 1,
              units: "sentences",
            }),
          });
        }
      }, 1000)
    );
  }

  handlechangeTextValueRange(styleName, array, option) {
    this.setState(
      {
        ...this.state,
        style: {
          ...this.state.style,
          [styleName]: array[option],
        },
      },
      () => this.updateReduxStore()
    );
  }

  updateReduxStore() {
    this.props.setNewStyle(this.props.element, this.state.style);
  }
}

export default TextStyleController;

TextStyleController.propTypes = {
  number: PropTypes.number,
  sentences: PropTypes.number,
  defaultStyle: PropTypes.object,
  element: PropTypes.string.isRequired,
  colours: PropTypes.array.isRequired,
  fonts: PropTypes.array.isRequired,
  usedFonts: PropTypes.array.isRequired,
  setNewStyle: PropTypes.func.isRequired,
  fullStyles: PropTypes.object.isRequired,
};
