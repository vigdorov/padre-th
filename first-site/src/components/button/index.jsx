import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-${props.template}`}
    >
      {props.name}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  template: PropTypes.oneOf(
    ['primary', 'secondary']
  ),
};

Button.defaultProps = {
  template: 'primary'
};
