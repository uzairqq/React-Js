import React from "react";
import TodoItem from "./TodoItem";

const Todos = () => {

  let todos=[
    {
      id:1,
      title:"You need to go to the market 1",
      desc:"you have this job done 1"
    },
     {
      id:2,
      title:"You need to go to the market 2",
      desc:"you have this job done 2"
    },
     {
      id:3,
      title:"You need to go to the market 3",
      desc:"you have this job done 3"
    },
     {
      id:4,
      title:"You need to go to the market 4",
      desc:"you have this job done 4"
    }
  ]

  return (
    <div className="container">
      <h2>Todo's List</h2>
      <TodoItem todo={todos[0]} />
    </div>
  );
};

export default Todos;
