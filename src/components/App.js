
import React,{useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [list,setList] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a React app', completed: false },
        { id: 3, text: 'Deploy the React app', completed: false }
    ])

  function handleComplete(taskID){
    setList(list.map(task => 
            task.id === taskID ? { ...task, completed: true } : task
          ))
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={list} completeFunction={handleComplete}/>
    </div>
  )
}

export default App


// import React, { useState } from 'react';
// import TodoList from './TodoList';

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a todo app', completed: false },
//     { id: 3, text: 'Deploy to production', completed: false },
//     { id: 4, text: 'Celebrate!', completed: true }
//   ]);

//   const handleComplete = (todoId) => {
//     setTodos(todos.map(todo => 
//       todo.id === todoId ? { ...todo, completed: true } : todo
//     ));
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoList todos={todos} onComplete={handleComplete} />
//     </div>
//   );
// }

// export default App;