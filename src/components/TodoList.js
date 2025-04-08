// import React from 'react';


// const TodoList = ({ todos, completeFunction }) => {
//     return (
//         <div style={{ margin: '20px' }}>
//             <h2 style={{ marginLeft: '20px' }}>Child Component</h2>
//             <ul>
//                 {todos.map(task => (
//                     <li>
//                         {/* {task}<button>Complete</button> */}
//                         <span>
//                             {task.text}
//                         </span>
//                         {!task.completed && (
//                             <button onClick={() => completeFunction(task.id)} >
//                                 Complete
//                             </button>
//                         )}
//                     </li>))}

//             </ul>
//         </div>
//     )
// }
// export default TodoList


// ###################################################         IN ORDER TO PASS TEST CASES
// Key Changes in TodoList.js:

// Added key prop to list items (required by React)

// Added data-id and data-testid attributes for test targeting

// Implemented immediate button disabling on click

// Improved styling for better visual feedback

// Added strikethrough for completed tasks

// Created separate handleClick function to manage button state

import React from 'react';

const TodoList = ({ todos, completeFunction }) => {
  const handleClick = (id) => {
    // Immediately disable the button to provide visual feedback
    const button = document.querySelector(`button[data-id="${id}"]`);
    if (button) button.disabled = true;
    completeFunction(id);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginLeft: '20px' }}>Child Component</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(task => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            <span style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginRight: '10px'
            }}>
              {task.text}
            </span>
            {!task.completed && (
              <button 
                data-id={task.id}  // Added for test targeting
                data-testid={`complete-btn-${task.id}`}  // Standard test ID
                onClick={() => handleClick(task.id)}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px'
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList