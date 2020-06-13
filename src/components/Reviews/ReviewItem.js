import React from "react";
import ColumnGridRadioButtonGroups from "../RadioButtonGrid/ColumnGridRadioButtonGroups";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import WorkedByComponent from '../Reviews/WorkedByComponent'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});


const ReviewItem = withStyles(styles)(({ classes, index, review, username }) => {
    
  return (
    <li>
      
      
      <Paper className={classes.paper}>

      <Container direction="row" spacing={2}>
          <Grid container item xs={9}>
            <Typography align='justify' color='textPrimary' display='block'>
              {review.paragraph_text}
            </Typography>
          </Grid>

          <Grid container item xs={9}>
            <Typography align='justify' color='error' display='block'>
              {'@'+username}
            </Typography>
          </Grid>

        <ColumnGridRadioButtonGroups id={review.id}/>
        
        <WorkedByComponent paragraph_id={review.id}/>

      </Container>
        

      </Paper>



    </li>
  );
});

export default ReviewItem;;
