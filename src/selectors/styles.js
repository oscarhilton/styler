export const allStyles = state => state.styles.get("styles").toJS();
export const brandColours = state => state.styles.get("colours").toJS();
export const usedFonts = state => {
  const styles = state.styles.get("styles").toJS();
  const fonts = Object.keys(styles).reduce((acc, style) => new Set([...acc, styles[style].fontFamily]), []);
  return Array.from(fonts);
};
export const panel = state => state.styles.get("resizePanel");
