import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Chk = ({
    checked 
}) => (
    <Checkbox
        checked={checked}
    />
);

Chk.propTypes = {
    checked: PropTypes.bool
};

export default Chk;
