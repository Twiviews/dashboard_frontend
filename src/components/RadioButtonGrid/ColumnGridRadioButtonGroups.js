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
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';



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
  saveStyles: {
    position: "absolute",
    marginLeft: "82%",
    marginTop: "10%",
  },
  
  deleteStyles:{
    position: "absolute",
    marginLeft: "82%",
    marginTop: "7%",
  },

  undecidedStyles:{
    position: "absolute",
    marginLeft: "82%",
    marginTop: "4%",
    margin: theme.spacing(1),

  }

});

const ColumnGridRadioButtonGroups = withStyles(styles)(({ classes,id }) => {
  const radioContext = useContext(AllRadioOutputContext);
  
  return (
  <div className={classes.root}>
    <Grid container direction="row" spacing={2}>
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

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.undecidedStyles}        
        startIcon={<ThreeSixtyIcon />}
        onClick={()=>{radioContext.radioDispatch({ type: 'undecided'});radioContext.radioDispatch({ type: 'setId',payload:id})}}
      >
        Undecided
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.deleteStyles}
        startIcon={<DeleteIcon />}
        onClick={()=>{radioContext.radioDispatch({ type: 'deleted'});radioContext.radioDispatch({ type: 'setId',payload:id})}}
      >
        Delete
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.saveStyles}
        startIcon={<SaveIcon />}
        onClick={()=>{radioContext.radioDispatch({ type: 'submitted'});radioContext.radioDispatch({ type: 'setId',payload:id})}}
      >
        Save
      </Button>
      
    </Grid>
  </div>
)

});

export default ColumnGridRadioButtonGroups;