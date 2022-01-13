import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button  className="btn-sm btn btn-danger">Delete</button>
    </div>
  )
    
};

export default TodoItem;
