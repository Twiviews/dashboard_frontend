import React,{useContext} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProductionValuesRadioButtonGroup from './ProductionValuesRadioButtonGroup'
import HowFilmWorksRadioButtonGroup from './HowFilmWorksRadioButtonGroup'
import EnjoyabilityRadioButtonGroup from './EnjoyabilityRadioButtonGroup'
import WhyFilmWorksRadioButtonGroup from './WhyFilmWorksRadioButtonGroup'
import EffectsOnPeopleRadioButtonGroup from './EffectsOnPeopleRadioButtonGroup'
import OverallSentimentRadioButtonGroup from './OverallSentimentRadioButtonGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 0.6,
  },
  buttonStyles: {
  position: "absolute",
  marginLeft: "85%",
  marginTop: "10%",
  },
});

const ColumnGridRadioButtonGroups = withStyles(styles)(({ classes,id }) => {
  const radioContext = useContext(AllRadioOutputContext);
  
  return (
  <div className={classes.root}>
    <Grid container xs={12} direction="row" spacing={2}>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <ProductionValuesRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <HowFilmWorksRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
             <EnjoyabilityRadioButtonGroup /> 
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <WhyFilmWorksRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <EffectsOnPeopleRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={1} zeroMinWidth>
              <Paper className={classes.paper}>
                <OverallSentimentRadioButtonGroup />
              </Paper>
      </Grid>    
      <Button size="medium" className={classes.buttonStyles} variant="contained" color="primary" onClick={()=>{radioContext.radioDispatch({ type: 'submitted'});radioContext.radioDispatch({ type: 'setId',payload:id})}}>
                Save
      </Button>
    </Grid>
  </div>
)

});

export default ColumnGridRadioButtonGroups;