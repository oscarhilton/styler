import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import hexColorRegex from "hex-color-regex";
import cn from "classnames";

export default class CSS extends PureComponent {
  constructor() {
    super();
    this.makeSassColour = this.makeSassColour.bind(this);
  }

  render() {
    const { element, displayStyles, dark } = this.props;
    return (
      <div className={cn("CSS", { "CSS--dark": dark })}>
        <span className="CSS--rule">
          {element} {"{"}
          {displayStyles.map(style => (
            <div key={style.key}>
              <span className="CSS--key">
                {`${style.key}`
                  .match(/[A-Z]*[^A-Z]+/g)
                  .join("-")
                  .toLowerCase()}:{" "}
              </span>
              <span className="CSS--value">{this.makeSassColour(style.value)}</span>
              <span className="CSS--comma">;</span>
            </div>
          ))}
          {"}"}
        </span>
      </div>
    );
  }

  makeSassColour(value) {
    if (hexColorRegex().test(value)) {
      const colourObj = this.props.colours.find(c => c.hex === value) || { name: "not found in brand colours" };
      return `$${colourObj.name
        .split(" ")
        .join("-")
        .toLowerCase()}`;
    }
    return value;
  }
}

CSS.propTypes = {
  element: PropTypes.string.isRequired,
  displayStyles: PropTypes.array.isRequired,
  colours: PropTypes.array.isRequired,
  dark: PropTypes.bool,
};
