import React, { Component } from "react";
import PropTypes from "prop-types";
import Page from "layouts/Page";
import { Helmet } from "react-helmet";

export default class Dummy extends Component {
  render() {
    const { fullStyles } = this.props;
    const fullStylesString = Object.keys(fullStyles)
      .map(
        el => `.dummy ${el}{
      ${Object.keys(fullStyles[el])
    .map(
      rule =>
        rule
          .match(/[A-Z]*[^A-Z]+/g)
          .join("-")
          .toLowerCase() +
            ": " +
            fullStyles[el][rule]
    )
    .join(";")}
    }`
      )
      .join("");
    return (
      <Page pageClass="Landing" title="M5 Styling">
        <Helmet
          style={[
            {
              cssText: `
              ${fullStylesString}
            `,
            },
          ]}
        />
        <div className="dummy">
          <h1>HTML Ipsum Presents</h1>

          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit
            amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
            tempus lacus enim ac dui. <a href="#something">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
          </p>

          <h2>Header Level 2</h2>

          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>

          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet
              congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
              tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>

          <h3>Header Level 3</h3>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
        </div>
      </Page>
    );
  }
}

Dummy.propTypes = {
  fullStyles: PropTypes.object.isRequired,
};
