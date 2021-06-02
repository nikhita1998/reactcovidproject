import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import vaccine from "./images/Capture_50.png";

import vaccineDiff from "./images/covaxin_vs_covishield.png";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin:'auto',
        
       
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div classname={classes.modal}>
             <img  onClick={handleOpen} src={vaccineDiff} width="50%" height="80%" alt="COVID-19" />
         
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Covaxin VS Covisheild</h2>
                        <p id="transition-modal-description">
                        <img style={{ position: 'relative',margin:'auto'}} 
        src={vaccine} width="100%" height="30%" alt="COVID-19" />
                            </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}