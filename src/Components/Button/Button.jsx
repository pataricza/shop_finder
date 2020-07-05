import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, handleClick }) => (
  <button
    className="button"
    type="submit"
    onClick={() => handleClick(text)}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: null,
};

export default Button;
