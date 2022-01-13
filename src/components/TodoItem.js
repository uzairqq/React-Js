import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
    </div>
  )
    
};

export default TodoItem;
