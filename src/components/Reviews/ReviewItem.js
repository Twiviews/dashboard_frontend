import React from "react";
import ColumnGridRadioButtonGroups from "../RadioButtonGrid/ColumnGridRadioButtonGroups";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';


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


const ReviewItem = withStyles(styles)(({ classes, index, review }) => {
    
  return (
    <li>
      
      
      <Paper className={classes.paper}>

      <Container direction="row" spacing={2}>
          <Grid container item xs={9}>
            <Typography align='justify' color='textPrimary' display='block'>
              {review.paragraph_text}
            </Typography>
          </Grid>

        <ColumnGridRadioButtonGroups/>

      </Container>
        

      </Paper>



    </li>
  );
});

export default ReviewItem;;
