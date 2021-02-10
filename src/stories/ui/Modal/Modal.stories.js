import React from 'react';
import Modal from './Modal';

export default {
    title: 'Modal',
    component: Modal,
    parameters: {
        componentSubtitle: 'Displays a modal window once the button has been clicked'
    }
};

const Template = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    modalButtonLabel: 'Open Me',
    ariaLabel: 'simple-modal-title',
    ariaDescribe: 'simple-modal-description',
    modalTitle: 'Text in a modal',
    modalBodyText: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
};
