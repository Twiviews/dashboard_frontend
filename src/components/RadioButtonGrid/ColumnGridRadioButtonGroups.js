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
import { useSubscription,useMutation } from "@apollo/react-hooks";


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


const MARK_AS_INCORRECT_MUTATION = 
gql`mutation MarkAsIncorrect($paragraph_id: Int) {
  update_pub_review_paragraphs(
    where: {id: {_eq: $paragraph_id}},
    _set: {
      how_film_doesnt_work: false, how_film_works: false, enjoyability: false, 
      effects_on_people: false, no_effect_on_people: false, no_enjoyability: false, 
      no_production_values: false, production_values: false, why_film_doesnt_work: false, 
      why_film_works: false, sentiment: "neutral", is_deleted: false, is_labeled: false, is_undecided: false
    }) 
    {
    returning {
      id
    }
  }
}
`;


const ColumnGridRadioButtonGroups = withStyles(styles)(({ classes,id,review }) => {
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;

  const [update_pub_review_paragraphs] = useMutation(MARK_AS_INCORRECT_MUTATION,{
    variables:{paragraph_id:id}
  });  


  let label_me = false

  const GET_LABELME = gql`
  subscription getLabelMe($paragraph_id: Int!) {
  labeler_by_pk(paragraph_id: $paragraph_id) {
    label_me
  }
}`;



const markAsIncorrect = (id) => {
  debugger;
  update_pub_review_paragraphs();
}
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
                <ProductionValuesRadioButtonGroup review={review} />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <HowFilmWorksRadioButtonGroup review={review} />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
             <EnjoyabilityRadioButtonGroup review={review} /> 
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <WhyFilmWorksRadioButtonGroup review={review} />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <EffectsOnPeopleRadioButtonGroup review={review} />
            </Paper>
      </Grid>
      <Grid container item xs={1} zeroMinWidth>
              <Paper className={classes.paper}>
                <OverallSentimentRadioButtonGroup review={review} />
              </Paper>
      </Grid>
      {!switchToggleValue &&
      (     
      <>
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
      </>)}
      {switchToggleValue &&
      (     
      <>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.undecidedStyles}        
        startIcon={<ThreeSixtyIcon />}
        onClick={()=>{markAsIncorrect(id)}}
      >
        Mark as Incorrect
      </Button>
      </>)}
      
      
    </Grid>
  </div>
)

});

export default ColumnGridRadioButtonGroups;