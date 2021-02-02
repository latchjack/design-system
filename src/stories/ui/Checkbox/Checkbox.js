import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root,
    &.Mui-checked {
        background-color: blue;
        color: green;
    }
`;

const Chk = ({
    checked,
    disabled
}) => (
    <StyledCheckbox
        checked={checked}
        disabled={disabled}
    />
);

Chk.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Chk;
