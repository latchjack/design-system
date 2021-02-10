import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

const SimpleModal = ({
    modalButtonLabel,
    ariaLabel,
    ariaDescribe,
    modalTitle,
    modalBodyText
}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log('clicked');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{modalTitle}</h2>
            <p id="simple-modal-description">
                {modalBodyText}
            </p>
            <SimpleModal />
        </div>
    );

    return (
        <div>
            <Button
                type="button"
                onClick={handleOpen}
                label={modalButtonLabel}
            >
                {modalButtonLabel}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={ariaLabel}
                aria-describedby={ariaDescribe}
            >
                {body}
            </Modal>
        </div>
    );
};

SimpleModal.propTypes = {
    modalButtonLabel: PropTypes.string,
    ariaLabel: PropTypes.string,
    ariaDescribe: PropTypes.string,
    modalTitle: PropTypes.string,
    modalBodyText: PropTypes.string
};

export default SimpleModal;
