import React from 'react';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTab = styled(Tab)`
    color: red;
`;

const Tb = ({
    tabs,
    children,
    disableRipple
}) => {
    if (!tabs) return null;
    return (
        <>
            {tabs.map(tab => (
                <StyledTab 
                    key={tab.id}
                    disabled={tab.disabled}
                    disableRipple={disableRipple}
                >
                    {children}
                </StyledTab>
            ))}
        </>
    );
};

Tb.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
};
