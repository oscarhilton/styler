import React, { Component } from "react";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import Page from "layouts/Page";
import LandingHeader from "./LandingHeader";
import Fonts from "./Fonts";
import BrandColours from "./BrandColours";
import TextStyleController from "./TextStyleController";
import CSS from "./CSS";
import fonts from "../fonts";

export default class Styler extends Component {
  render() {
    const { fullStyles, setNewStyle, setColour, brandColours, addColour, usedFonts } = this.props;

    const TextStyleProps = {
      setNewStyle,
      setColour,
      fullStyles,
      fonts,
      usedFonts,
      colours: brandColours,
    };

    return (
      <Page pageClass="Landing" title="M5 Styling">
        <div className="Landing__container">
          <LandingHeader />
          <Fonts fonts={usedFonts} />
          <BrandColours font={fonts} colours={brandColours} setColour={setColour} addColour={addColour} />
          <TextStyleController {...TextStyleProps} element="h1" />
          <TextStyleController {...TextStyleProps} element="h2" />
          <TextStyleController {...TextStyleProps} element="h3" />
          <TextStyleController {...TextStyleProps} element="h4" />
          <TextStyleController {...TextStyleProps} element="h5" />
          <TextStyleController {...TextStyleProps} element="a" />
          <TextStyleController
            {...TextStyleProps}
            element="p"
            sentences={Math.floor(Math.random() * 10 + 4)}
            number={3}
          />
          <TextStyleController {...TextStyleProps} element="li" number={5} />
          <TextStyleController {...TextStyleProps} element="button" />
          <TextStyleController {...TextStyleProps} element="strong" />
          <TextStyleController {...TextStyleProps} element="i" />
          <TextStyleController {...TextStyleProps} element="s" />
          <TextStyleController {...TextStyleProps} element="code" />
        </div>
        <div className="Landing__container--dark container">
          {Object.keys(fullStyles).map(style => {
            let displayStyles = [];
            for (const key of Object.keys(fullStyles[style])) {
              displayStyles.push({ key, value: fullStyles[style][key] });
            }
            return <CSS element={style} displayStyles={displayStyles} colours={brandColours} dark />;
          })}
        </div>
        <div onClick={() => browserHistory.push("/mock")}>Go to mock</div>
      </Page>
    );
  }
}

Styler.propTypes = {
  setNewStyle: PropTypes.func.isRequired,
  setColour: PropTypes.func.isRequired,
  fullStyles: PropTypes.object.isRequired,
  brandColours: PropTypes.array.isRequired,
  usedFonts: PropTypes.array,
  addColour: PropTypes.func.isRequired,
};
