import React, { useState, useEffect, Fragment } from "react";
import ReviewItem from "./ReviewItem";
import {useQuery} from '@apollo/react-hooks';
import {GET_UNLABELED_REVIEWS} from "./reviews.graphql"
import { useMutation, useSubscription } from "@apollo/react-hooks";



const UnLabeledReviewsList = props => {
  
  const [state] = useState({
      filter: "unlabeled"
    });

   const {reviews} = props;
   let filteredReviews = reviews;

   if (state.filter === "unlabeled") {     
    filteredReviews = reviews.filter(review => review.is_labeled === false);
  }

  const reviewList = [];
  filteredReviews.forEach((review, index) => {
    reviewList.push(<ReviewItem key={index} index={index} review={review} />);     
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
