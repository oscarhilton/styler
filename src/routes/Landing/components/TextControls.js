import React, { Component } from "react";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlider";

export default class TextControls extends Component {
  constructor() {
    super();
    this.state = {
      font: false,
      type: true,
      colours: false,
      margins: false,
      padding: false,
    };
    this.changeControls = this.changeControls.bind(this);
  }

  render() {
    const {
      styles,
      handleRangeChange,
      hanldeColourChange,
      fonts,
      handleFontChange,
      handlechangeTextValueRange,
      usedFonts,
    } = this.props;
    return (
      <div className="TextControls">
        <div className="TextContorls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("font")}>
            Font
          </button>
          <div>Used fonts</div>
          <select onChange={handleFontChange}>{usedFonts.map(font => <option value={font}>{font}</option>)}</select>
          <div>Google font library</div>
          <select onChange={handleFontChange}>{fonts.map(font => <option value={font}>{font}</option>)}</select>
        </div>
        <div className="TextControls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("type")}>
            Typography
          </button>
          {this.state.type && (
            <div>
              <RangeSlider
                title="Font Weight"
                min="100"
                max="700"
                step="100"
                styleName="fontWeight"
                styleUnit=""
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Font Size"
                min="1"
                max="100"
                styleName="fontSize"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Letter Spacing"
                min="-15"
                max="40"
                styleName="letterSpacing"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Word Spacing"
                min="-15"
                max="40"
                styleName="wordSpacing"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Line Height"
                min="0"
                max="200"
                styleName="lineHeight"
                styleUnit="%"
                state={styles}
                handleChange={handleRangeChange}
              />
            </div>
          )}
        </div>
        <div className="TextControls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("colours")}>
            Colours and opacity
          </button>
          {this.state.colours && (
            <div>
              <span>Colour</span>
              <div className="ColourPicker">
                {this.props.colours.map(colour => (
                  <button
                    className="ColourPicker__colour"
                    style={{ backgroundColor: colour.hex }}
                    onClick={hanldeColourChange(colour.hex, "color")}
                  />
                ))}
              </div>
              <span>Background</span>
              <div className="ColourPicker">
                {[...this.props.colours, { name: "transparent", hex: "transparent" }].map(colour => (
                  <button
                    className="ColourPicker__colour"
                    style={{ backgroundColor: colour.hex }}
                    onClick={hanldeColourChange(colour.hex, "backgroundColor")}
                  />
                ))}
              </div>
              <RangeSlider
                title="Opacity"
                min="0"
                max="1"
                step="0.01"
                styleName="opacity"
                styleUnit=""
                state={styles}
                handleChange={handleRangeChange}
              />
            </div>
          )}
        </div>
        <div className="TextControls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("margins")}>
            Margins
          </button>
          {this.state.margins && (
            <div>
              <RangeSlider
                title="Margin Top"
                min="0"
                max="50"
                styleName="marginTop"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Margin Bottom"
                min="0"
                max="50"
                styleName="marginBottom"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Margin Left"
                min="0"
                max="50"
                styleName="marginLeft"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Margin Right"
                min="0"
                max="50"
                styleName="marginRight"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
            </div>
          )}
        </div>
        <div className="TextControls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("padding")}>
            Padding
          </button>
          {this.state.padding && (
            <div>
              <RangeSlider
                title="Padding Top"
                min="0"
                max="50"
                styleName="paddingTop"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Padding Bottom"
                min="0"
                max="50"
                styleName="paddingBottom"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Padding Left"
                min="0"
                max="50"
                styleName="paddingLeft"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
              <RangeSlider
                title="Padding Right"
                min="0"
                max="50"
                styleName="paddingRight"
                styleUnit="px"
                state={styles}
                handleChange={handleRangeChange}
              />
            </div>
          )}
        </div>
        <div className="TextControls__accordion">
          <button className="TextControls__accordion__toggle" onClick={this.changeControls("display")}>
            Display
          </button>
          {this.state.display && (
            <div>
              <RangeSlider
                title="Display"
                min="0"
                max="2"
                styleName="display"
                state={styles}
                handleChange={e =>
                  handlechangeTextValueRange("display", ["block", "inline-block", "inline"], e.target.value)
                }
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  changeControls(type) {
    return () => {
      this.setState({ [type]: !this.state[type] });
    };
  }
}

TextControls.propTypes = {
  styles: PropTypes.object.isRequired,
  handleRangeChange: PropTypes.func.isRequired,
  hanldeColourChange: PropTypes.func.isRequired,
  handleFontChange: PropTypes.func.isRequired,
  handlechangeTextValueRange: PropTypes.func.isRequired,
  colours: PropTypes.array.isRequired,
  fonts: PropTypes.array.isRequired,
  usedFonts: PropTypes.array.isRequired,
};
