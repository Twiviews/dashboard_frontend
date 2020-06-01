import React from "react";

const ReviewItem = ({ index, review }) => {
    
  return (
    <li>
      <div className="view">
        <div className="round">
          <input
            checked={review.is_labeled}
            type="checkbox"
            id={review.review_id}
          />
          <label htmlFor={review.id} />
        </div>
      </div>

      <div className={"labelContent" + (review.is_labeled ? " labeled" : "")}>
        <div>{review.paragraph_text}</div>
      </div>

    </li>
  );
};

export default ReviewItem;;
