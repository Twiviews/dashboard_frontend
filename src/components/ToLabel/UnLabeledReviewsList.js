import React, { useState, Fragment } from "react";
import gql from 'graphql-tag';

import ReviewItem from "./ReviewItem";

import {useQuery} from '@apollo/react-hooks';

const GET_UNLABELED_REVIEWS = gql`
                query getUnLabeledReviews {
                        pub_review_paragraphs(where:{
                                                      is_labeled:{ _eq: false}},
                                                      limit:5,
                                                      order_by: { date_created: desc})
                                                      {
                                                          id
                                                          review_id
                                                          paragraph_text
                                                          date_created
                                                          is_labeled   
                                                          production_values 
		                                                      how_film_works 
		                                                      enjoyability 
		                                                      why_film_works 
                                                      		effects_on_people 
		                                                      no_production_values 
		                                                      how_film_doesnt_work 
		                                                      no_enjoyability 
		                                                      why_film_doesnt_work 
		                                                      no_effect_on_people 
		                                                      sentiment       
                                                      }
                                }`;

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
export {GET_UNLABELED_REVIEWS}