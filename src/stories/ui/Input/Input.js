import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const Ipt = ({
    label,
    placeholder,
    required,
    value,
    autoFocus,
    fullWidth,
    endAdornment
}) => (
    <Input
        label={label}
        placeholder={placeholder}
        required={required}
        value={value}
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        endAdornment={endAdornment}
    >
        {label}
    </Input>
);

Ipt.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    autoFocus: PropTypes.bool,
    fullWidth: PropTypes.bool,
    endAdornment: PropTypes.string
};

export default Ipt;