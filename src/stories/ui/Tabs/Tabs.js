import React from 'react';
import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
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
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const StyledTab = styled(Tab)`
    color: red;
`;

const Tb = ({
    tabs,
}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!tabs) return null;
    return (
        <div>
        <AppBar position="static">
            <Tabs value={value}>
                {tabs.map(tab => (
                    <StyledTab 
                        key={tab.id}
                        disabled={tab.disabled}
                        onClick={e => handleChange(e)}
                    >
                        {tab.label}
                    </StyledTab>
                ))}
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        </div>
    );
};

Tb.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string
};
