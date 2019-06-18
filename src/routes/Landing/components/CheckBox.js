import React, { PureComponent } from "react";

export default class CheckBox extends PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleChange} />
      </div>
    );
  }

  handleChange() {
    console.log("hi");
  }
}
