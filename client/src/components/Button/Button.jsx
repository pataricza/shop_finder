import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './button.scss';

const CustomButton = ({ disabled, text, onClick }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Button>
);

CustomButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  disabled: false,
};

export default CustomButton;
