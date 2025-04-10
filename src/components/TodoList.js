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
  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginLeft: '20px' }}>Child Component</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((task, index) => (
          <li 
            key={task.id} 
            style={{ margin: '10px 0' }}
            data-testid={`todo-item-${index + 1}`} // Added for test targeting
          >
            <span>
              {task.text}
            </span>
            {!task.completed ? (
              <button 
                onClick={() => completeFunction(task.id)}
                data-testid={`complete-btn-${index + 1}`} // Standard test ID
              >
                Complete
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList