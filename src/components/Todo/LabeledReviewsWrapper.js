import React from "react";

import LabeledReviewsList from "./LabeledReviewsList";

const LabeledReviewsWrapper = () => {
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Labeled Reviews</div>

      <LabeledReviewsList />
    </div>
  );
};

export default LabeledReviewsWrapper;

