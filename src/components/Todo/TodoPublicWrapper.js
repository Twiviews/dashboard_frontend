import React from "react";

// import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";

const TodoPublicWrapper = () => {
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Reviews to label (realtime)</div>

      <TodoPublicList />
    </div>
  );
};

export default TodoPublicWrapper;
