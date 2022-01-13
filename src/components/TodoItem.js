import React from "react";

const TodoItem = ({todo,onDelete}) => {
  return (
    <div >
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={()=>onDelete(todo)}  className="btn-sm btn btn-danger">Delete</button>
    </div>
  )
    
};

export default TodoItem;
