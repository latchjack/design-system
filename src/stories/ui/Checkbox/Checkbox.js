import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Chk = ({
    checked,
    disabled
}) => (
    <Checkbox
        checked={checked}
        disabled={disabled}
    />
);

Chk.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Chk;
