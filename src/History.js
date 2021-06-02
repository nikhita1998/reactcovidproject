import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Carousal from './Carousal';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
       
        <div className={classes.modal}>
        
        <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleOpen}>Click me </Button>
            </Grid>
            <br/>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Where did it come from ?</h2>
                        <p id="transition-modal-description">
                        Experts say SARS-CoV-2 originated in bats. That’s also how the coronaviruses behind Middle East respiratory syndrome (MERS) and severe acute respiratory syndrome (SARS) got started.
                        </p>
                        <p id="transition-modal-description">
SARS-CoV-2 made the jump to humans at one of Wuhan’s open-air “wet markets.” They’re where customers buy fresh meat and fish, including animals that are killed on the spot.
</p>
<p id="transition-modal-description">
Some wet markets sell wild or banned species like cobras, wild boars, and raccoon dogs. Crowded conditions can let viruses from different animals swap genes. Sometimes the virus changes so much it can start to infect and spread among people.
                            </p>
                            
                    </div>
                </Fade>
               <Carousal></Carousal>
               
        </div>
      
    );
}