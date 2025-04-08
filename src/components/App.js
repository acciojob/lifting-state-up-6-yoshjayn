
// import React,{useState} from "react";
// import './../styles/App.css';
// import TodoList from "./TodoList";

// const App = () => {
//   const [list,setList] = useState([
//         { id: 1, text: 'Learn React', completed: false },
//         { id: 2, text: 'Build a React app', completed: false },
//         { id: 3, text: 'Deploy the React app', completed: false }
//     ])

//   function handleComplete(taskID){
//     setList(list.map(task => 
//             task.id === taskID ? { ...task, completed: true } : task
//           ))
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <TodoList todos={list} completeFunction={handleComplete}/>
//     </div>
//   )
// }

// export default App

// ###############################################   IN ORDER TO MEET TEST CASE'S REQUIREMENTS
// Key Changes in App.js:

// Changed setList to use functional update (prevList) to 
// ensure we're working with the latest state

// This helps prevent race conditions in state updates

import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [list, setList] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
  ])

  // Changed to functional update for reliable state updates
  function handleComplete(taskID) {
    setList(prevList => 
      prevList.map(task => 
        task.id === taskID ? { ...task, completed: true } : task
      )
    )
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={list} completeFunction={handleComplete} />
    </div>
  )
}

export default App