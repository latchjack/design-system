import React from 'react';
import Tabs from './Tabs';

export default {
    title: 'Tabs',
    component: Tabs
};

const Template = args => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        { id: 1, label: 'Tab 1'},
        { id: 2, label: 'Tab 2'},
        { id: 3, label: 'Tab 3'}
    ],
    disabled: false
};
