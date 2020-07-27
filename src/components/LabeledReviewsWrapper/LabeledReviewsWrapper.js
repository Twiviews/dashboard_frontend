import React, { useEffect, useState } from "react";
import LabeledReviewsList from "./LabeledReviewsList";

const LabeledReviewsWrapper = () => {
  return (
    <div className="reviewWrapper">
      <div className="sectionHeader"></div>
      <h1>Labeled Review List</h1>
      <LabeledReviewsList />
    </div>

  );
};

export default LabeledReviewsWrapper;

