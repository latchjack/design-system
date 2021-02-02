import React from 'react';
import Checkbox from './Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox
};

const Template = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    checked: true,
    disabled: false
};