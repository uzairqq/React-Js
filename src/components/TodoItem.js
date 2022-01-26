import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <input
        className="btn btn-danger"
        type="button"
        value={"Delete"}
        onClick={() => onDelete(todo)}
      />
    </div>
  );
};

export default TodoItem;
