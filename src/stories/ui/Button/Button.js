import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: red;
  color: green;
`;

// const handleClick = () => {
//   console.log('clicked');
// };

/**
 * Primary UI component for user interaction
 */
const Btn = ({
  label,
  size,
  onClick
}) => (
  <StyledButton
    label={label}
    size={size}
    onClick={onClick}
    // onClick={handleClick}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
};

export default Btn;
