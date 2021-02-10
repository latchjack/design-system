import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled(Tab)`
    color: #cc66ff; // original: #ba54f5, websafe: #cc66ff
    &:hover {
        color: #9900ff;  // original: #9c0eef, websafe: #9900ff
        // text-shadow: 0px 0px 5px #000000;
        border-radius: 3px;
    }
    &:disabled {
        color: #cccccc;
    }
`;

const StyledAppBar = styled(AppBar)`
    background-color: rgba(0, 0, 0, 0);
    border-bottom: none;
`;

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

function TabPanel(props) {
    const {
        children, value, index, ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    /**
    The children, index and value props are required to render the tabpanel.
    */
    children: PropTypes.node,
    index: PropTypes.objectOf(PropTypes.any),
    value: PropTypes.objectOf(PropTypes.any)
};

/**
- Use the tabs for creating menus and submenus for navigating
- the settings of the application or the ease of adding data
- to the application.
* */

const Tb = ({
    tabs
}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!tabs) return null;
    return (
        <>
            <StyledAppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                    TabIndicatorProps={{ style: { background: '#9c0eef' } }}
                >
                    {tabs.map(tab => (
                        <StyledTab
                            value={tab.value}
                            key={tab.id}
                            disabled={tab.disabled}
                            label={tab.label}
                            role="tab"
                            {...a11yProps(`${tab.value}`)}
                        >
                            {tab.label}
                        </StyledTab>
                    ))}
                </Tabs>
            </StyledAppBar>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </>
    );
};

Tb.propTypes = {
    /**
    Use the tabs arg to pass an array of object for the tabs to be created.
    */
    tabs: PropTypes.arrayOf(PropTypes.object)
};

export default Tb;
