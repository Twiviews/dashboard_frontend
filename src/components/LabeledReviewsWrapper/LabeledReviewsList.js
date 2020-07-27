import React, { useState, useContext, Fragment } from "react";
import ReviewItem from "./ReviewItem";
import {GET_LABELED_REVIEWS} from "../graphql/reviews.graphql"
import { useMutation, useSubscription } from "@apollo/react-hooks";
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext';





const LabeledReviewsList = props => {
  const radioContext = useContext(AllRadioOutputContext);

  
  const [state] = useState({
      filter: "labeled"
    });

   const {reviews} = props;
   let filteredReviews = reviews;
   
   if (state.filter === "labeled") {     
    filteredReviews = reviews.filter(review => review.is_labeled === true && review.is_deleted === false);
  }

  if(state.filter === "labeled" && radioContext.user !== '' && radioContext.user !== undefined) {
    filteredReviews = reviews.filter(review => review.is_labeled === true && review.is_deleted === false && review.worked_by.labeler_user.username === radioContext.user);
  }

  
  const reviewList = [];
  filteredReviews.forEach((review, index) => {
    let push = false    
    let labeler = '"LABEL ME"!'
    if(review.worked_by!== null){
      if(review.id === review.worked_by.paragraph_id) {
        labeler = review.worked_by.labeler_user.username
        reviewList.push(<ReviewItem key={index} index={index} review={review} username={labeler} />);  
        push = true             
      }      
    }
    if(!push){
      reviewList.push(<ReviewItem key={index} index={index} review={review} username={labeler} />);     
    }
  });

  return (
    <Fragment>
      <div className="reviewListWrapper">
        <ul>{reviewList}</ul>        
     </div>

    </Fragment>
  );
};



const LabeledReviewsListQuery = () => {
  const { loading, error, data } = useSubscription(GET_LABELED_REVIEWS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }  

  return <LabeledReviewsList reviews={data.pub_review_paragraphs} />;
};

export default LabeledReviewsListQuery
