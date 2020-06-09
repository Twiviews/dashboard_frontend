import React, { useEffect, useState } from "react";
import UnLabeledReviewsList from "./UnLabeledReviewsList";

const UnLabeledReviewsWrapper = () => {
  return (
    <div className="reviewWrapper">
      <div className="sectionHeader"></div>
      <UnLabeledReviewsList />
    </div>

  );
};

export default UnLabeledReviewsWrapper;

