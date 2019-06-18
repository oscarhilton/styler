import React, { Component } from "react";
import PropTypes from "prop-types";
import Colour from "./Colour";

export default class BrandColours extends Component {
  render() {
    const { colours, setColour, addColour } = this.props;
    return (
      <div className="BrandColours">
        <div className="BrandColours__title">
          <h3>Colours</h3>
        </div>
        <div className="BrandColours__colours">
          {colours.map((colour, i) => (
            <Colour
              key={i}
              background={colour.hex}
              name={colour.name}
              hex={colour.hex}
              index={i}
              setColour={setColour}
            />
          ))}
          <div className="BrandColours__colours__colour" onClick={addColour}>
            add new
          </div>
        </div>
        <div className="BrandColours__css">
          <div className="CSS">
            {colours.map(colour => (
              <div>
                <span className="CSS--key">
                  ${colour.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}:{" "}
                </span>
                <span className="CSS--value">{colour.hex}</span>
                <span className="CSS--comma">;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BrandColours.propTypes = {
  colours: PropTypes.array,
  setColour: PropTypes.func.isRequired,
  addColour: PropTypes.func.isRequired,
};
