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
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

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

  let label_me = false

  const GET_LABELME = gql`
  subscription getLabelMe($paragraph_id: Int!) {
  labeler_by_pk(paragraph_id: $paragraph_id) {
    label_me
  }
}`;

const { loading, error, data } = useSubscription(GET_LABELME, {variables: { paragraph_id: id}});
  if (loading) return <p>Loading ...</p>;
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if(data.labeler_by_pk !== null){
    label_me = data.labeler_by_pk.label_me; 
  }

  
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
        onClick={()=>{ if(label_me) {radioContext.radioDispatch({ type: 'undecided'});radioContext.radioDispatch({ type: 'setId',payload:id})} else { alert('Please click LABEL ME! first') }}}
      >
        Undecided
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.deleteStyles}
        startIcon={<DeleteIcon />}
        onClick={()=>{ if(label_me) {radioContext.radioDispatch({ type: 'deleted'});radioContext.radioDispatch({ type: 'setId',payload:id})} else { alert('Please click LABEL ME! first')}}}
      >
        Delete
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.saveStyles}
        startIcon={<SaveIcon />}
        onClick={()=>{ if(label_me) {radioContext.radioDispatch({ type: 'submitted'});radioContext.radioDispatch({ type: 'setId',payload:id})} else { alert('Please click LABEL ME! first')}}}
      >
        Save
      </Button>
      
    </Grid>
  </div>
)

});

export default ColumnGridRadioButtonGroups;