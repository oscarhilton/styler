import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as stylesSelectors from "selectors/styles";

export const LandingLayout = ({ children, usedFonts }) => {
  return (
    <div className="LandingLayout">
      <Helmet
        style={[
          {
            cssText: `
            @import url('https://fonts.googleapis.com/css?family=${usedFonts.join("|")}');
          `,
          },
        ]}
      />
      {children}
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.element.isRequired,
  usedFonts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  usedFonts: stylesSelectors.usedFonts(state),
});

export default connect(mapStateToProps)(LandingLayout);
