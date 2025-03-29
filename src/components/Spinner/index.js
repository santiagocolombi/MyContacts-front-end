import PropTypes from "prop-types";
import { StyledSpinner } from "./styles";

export default function Spinner({ width, height }) {
  return <StyledSpinner width={width} height={height} />;
}

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Spinner.defaultProps = {
  width: 100,
  height: 100,
};
