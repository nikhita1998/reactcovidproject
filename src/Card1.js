import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import symptoms from "./images/symptoms.png";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    position: 'relative',
    margin:'auto'
   },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Symptoms of COVID-19"
       
      />
       <img  src={symptoms} width="100%" height="10%" alt="COVID-19" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        The most common symptoms of COVID-19 are:

           Fever <br/>
           Dry cough<br/>
          Fatigue<br/>
          Click on arrow to know more
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
          <Typography paragraph>
         <b> Other symptoms that are less common and may affect some patients include:</b><br/>

Loss of taste or smell,<br/>
Nasal congestion,<br/>
Conjunctivitis (also known as red eyes)<br/>
Sore throat,<br/>
Headache,<br/>
Muscle or joint pain,<br/>
Different types of skin rash,<br/>
Nausea or vomiting,<br/>
Diarrhea,<br/>
Chills or dizziness.<br/>
          </Typography>
          <Typography paragraph>
         <b>Symptoms of severe COVID‐19 disease include:</b> <br/>

Shortness of breath,<br/>
Loss of appetite,<br/>
Confusion,<br/>
Persistent pain or pressure in the chest,<br/>
High temperature (above 38 °C).<br/>
          </Typography>
          <Typography paragraph>
          <b>Other less common symptoms are:</b><br/>

Irritability,<br/>
Confusion,<br/>
Reduced consciousness (sometimes associated with seizures),<br/>
Anxiety,<br/>
Depression,<br/>
Sleep disorders,<br/>
More severe and rare neurological complications such as strokes, brain inflammation, delirium and nerve damage.<br/>
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}