import React from "react";

// import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";

const TodoPrivateWrapper = () => {
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Labeled Reviews</div>

      {/* <TodoInput /> */}
      <TodoPublicList />
    </div>
  );
};

export default TodoPrivateWrapper;
