import React, { useState, useEffect, Fragment } from "react";
import ReviewItem from "./ReviewItem";
import {useQuery} from '@apollo/react-hooks';
import {GET_UNLABELED_REVIEWS} from "../graphql/reviews.graphql"
import { useMutation, useSubscription } from "@apollo/react-hooks";



const UnLabeledReviewsList = props => {
  
  const [state] = useState({
      filter: "unlabeled"
    });

   const {reviews} = props;
   let filteredReviews = reviews;

   if (state.filter === "unlabeled") {     
    filteredReviews = reviews.filter(review => review.is_labeled === false && review.is_deleted === false);
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



const UnLabeledReviewsListQuery = () => {
  const { loading, error, data } = useSubscription(GET_UNLABELED_REVIEWS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }  

  return <UnLabeledReviewsList reviews={data.pub_review_paragraphs} />;
};

export default UnLabeledReviewsListQuery
