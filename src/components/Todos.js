import React,{useState} from "react";
import TodoItem from "./TodoItem";

const Todos = () => {

  const [todos, setTodos] = useState([
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
  ])

  const onDelete=(todo)=>{
      console.log("Delete Clicked",todo)
      setTodos(todos.filter((argTodo)=>{
        return argTodo!==todo
      }))
  }
  

  return (

    
    <div className="container">
      <h2 className="text-center">Todo's List</h2>

      {todos.map((todo)=>{
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
      })}
      
    </div>
  );
};

export default Todos;
