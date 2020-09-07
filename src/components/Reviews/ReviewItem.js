import React,{ useRef, useEffect, useContext } from "react";
import ColumnGridRadioButtonGroups from "../RadioButtonGrid/ColumnGridRadioButtonGroups";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import WorkedByComponent from '../Reviews/WorkedByComponent'
import gql from "graphql-tag";
import { useQuery, useMutation, useSubscription } from "@apollo/react-hooks";
import {AllRadioOutputContext} from "../../contexts/AllRadioOutputContext/AllRadioOutputContext";
import SelectedParagraphList from "./SelectedParagraphList/SelectedParagraphList";
import '../../styles/App.css';


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

  const sentenceMapperRef = useRef(null);
  const radioContext = useContext(AllRadioOutputContext);
  const {radioDispatch,currentSentence} = radioContext;
  

  if (loading) return <p>Loading ...</p>;
        
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if(data.pub_review_paragraphs_aggregate.aggregate.count > 0){
      
    labeler_count = data.pub_review_paragraphs_aggregate.aggregate.count                   

  }

  /*
  useEffect(()=>{
    review.paragraph_text
  },[]);*/
 

  const onSelection = (event) => {
    let selectedText = window.getSelection().toString().trim();
    if(selectedText.length > 0) {
      sentenceMapperRef.current.style.visibility='visible';
      const x = event.pageX;
      const y = event.pageY;
      sentenceMapperRef.current.style.left=`${x-20}px`;
      sentenceMapperRef.current.style.top=`${y-150}px`;
      sentenceMapperRef.current.style.left=`block`;
      radioDispatch({type:"changeCurrentSentence",value:selectedText});
      console.log(radioContext.radioOutputState)
    }
  }

  const highlightText = () =>
  {      
    let selection= window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span= document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.appendChild(selectedText);
    selection.insertNode(span);
  }

  const getMappingValue = (e) => {
    radioDispatch({type:"changeMapperState",field:e.target.value,value:currentSentence});
    sentenceMapperRef.current.style.visibility=`hidden`;
  }
    
  return (
    <li>
      <Paper className={classes.paper}>
      <Container direction="row" spacing={2}>
          <Grid container item xs={9}>
            <Typography 
              align='justify' 
              color='textPrimary' 
              display='block'
              onMouseUp={(e)=>{highlightText();onSelection(e);}} 
            >
              {review.paragraph_text}
            </Typography>
          </Grid>
          <Grid container item xs={9}>
            <Typography align='justify' color='error' display='block'>
              {'@'+username+' ('+labeler_count+')'}
            </Typography>
          </Grid>
        <ColumnGridRadioButtonGroups id={review.id}/>
        <WorkedByComponent paragraph_id={review.id}/>
        <SelectedParagraphList/>
      </Container>
      <div>
        <select ref={sentenceMapperRef} onChange={(e)=>{getMappingValue(e)}} className="selectMapper">
                <option disabled selected value> -- select an option -- </option>
                <option value="Sen_Production_Values"> Production Values </option>
                <option value="Sen_No_Production_Values"> No Production Values </option>
                <option value="Sen_NA_Production_Values"> N/A Production Values </option>
                <option value="Sen_How_Film_Works"> How Film Works </option>
                <option value="Sen_No_How_Film_Works"> No How Film Works </option>
                <option value="Sen_NA_How_Film_Works"> N/A How Film Works </option>
                <option value="Sen_Enjoyability">  Enjoyability </option>
                <option value="Sen_No_Enjoyability"> No Enjoyability </option>
                <option value="Sen_NA_Enjoyability"> NA Enjoyability </option>
                <option value="Sen_Why_Film_Works"> Why Film Works </option>
                <option value="Sen_Why_Film_doesnt_Work">  Why Film doesnt Works</option>
                <option value="Sen_NA_Why_Film_Works"> NA Why Film Works </option>
                <option value="Sen_Effects_on_people"> Effects on people </option>
                <option value="Sen_No_Effects_on_people"> No Effects on people</option>
                <option value="Sen_NA_Effects_on_people"> NA Effects on people</option>
                <option value="Sen_Overall_Positive"> Overall Positive </option>
                <option value="Sen_Overall_Negative"> Overall Negative</option>
                <option value="Sen_Overall_Neutral"> Overall Neutral</option>         
        </select>
      </div>
      </Paper>
    </li>
  );
});

export default ReviewItem;;
