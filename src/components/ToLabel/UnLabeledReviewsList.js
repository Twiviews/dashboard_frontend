import React, { useState, Fragment } from "react";
import ReviewItem from "./ReviewItem";
import {useQuery} from '@apollo/react-hooks';
import {GET_UNLABELED_REVIEWS} from "./reviews.graphql"



const UnLabeledReviewsList = props => {
  
  const [state] = useState({
      filter: "labeled"
    });

   const {reviews} = props;
   let filteredReviews = reviews;

   if (state.filter === "labeled") {     
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
  const { loading, error, data } = useQuery(GET_UNLABELED_REVIEWS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  console.log(data.pub_review_paragraphs[0]);

  return <UnLabeledReviewsList reviews={data.pub_review_paragraphs} />;
};

export default UnLabeledReviewsListQuery