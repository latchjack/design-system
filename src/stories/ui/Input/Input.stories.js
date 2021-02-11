import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input
};

const Template = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Here',
    placeholder: 'Please fill',
    required: false
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
    label: 'Here',
    placeholder: '',
    disabled: true
};

export const Adornment = Template.bind({});
Adornment.args = {
    placeholder: 'Enter weight',
    required: false,
    endAdornment: 'Kg'
};