import React from "react";
import ColumnGridRadioButtonGroups from "../RadioButtonGrid/ColumnGridRadioButtonGroups";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import WorkedByComponent from '../Reviews/WorkedByComponent'
import gql from "graphql-tag";
import { useQuery, useMutation, useSubscription } from "@apollo/react-hooks";

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


const GET_LABELER_COUNT = gql`
      subscription getLabelerCount($username: String_comparison_exp = {}) {
  pub_review_paragraphs_aggregate(where: {labelers: {labeler_user: {username: $username}}, is_labeled: {_eq: true}, is_deleted: {_eq: false}, is_undecided: {_eq: false}}) {
    aggregate {
      count(columns: id)
    }
  }
}`;



const ReviewItem = withStyles(styles)(({ classes, index, review, username }) => {

  let labeler_count = 0
  
  const { loading, error, data } = useSubscription(GET_LABELER_COUNT, {variables: {"username": {"_eq": username}}});

  if (loading) return <p>Loading ...</p>;
        
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if(data.pub_review_paragraphs_aggregate.aggregate.count > 0){
      
    labeler_count = data.pub_review_paragraphs_aggregate.aggregate.count                   

  }

    
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
              {'@'+username+' ('+labeler_count+')'}
            </Typography>
          </Grid>

        <ColumnGridRadioButtonGroups id={review.id} review={review}/>
        
        <WorkedByComponent paragraph_id={review.id}/>

      </Container>
        

      </Paper>



    </li>
  );
});

export default ReviewItem;;
