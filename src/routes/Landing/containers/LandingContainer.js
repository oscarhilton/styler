import { connect } from "react-redux";
import Landing from "../components";
import * as contentActions from "redux/content/actions";
import * as contentSelectors from "selectors/content";
import * as stylesActions from "redux/styles/actions";
import * as stylesSelectors from "selectors/styles";

const mapDispatchToProps = dispatch => ({
  contentGetContent: pageName => dispatch(contentActions.contentGetContent(pageName)),
  setNewStyle: (element, style) => dispatch(stylesActions.setNewSyle(element, style)),
  setColour: (index, hex) => dispatch(stylesActions.setColour(index, hex)),
  addColour: () => dispatch(stylesActions.addColour()),
  resizePanel: panelObj => dispatch(stylesActions.resizePanel(panelObj)),
});

const mapStateToProps = state => ({
  homeContent: contentSelectors.contentPageSelectorFactory("home")(state),
  fullStyles: stylesSelectors.allStyles(state),
  brandColours: stylesSelectors.brandColours(state),
  usedFonts: stylesSelectors.usedFonts(state),
  panel: stylesSelectors.panel(state),
});

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing),
};
