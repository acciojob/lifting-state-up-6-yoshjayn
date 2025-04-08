import React from 'react';


const TodoList = ({ todos, completeFunction }) => {
    return (
        <div style={{ margin: '20px' }}>
            <h2 style={{ marginLeft: '20px' }}>Child Component</h2>
            <ul>
                {todos.map(task => (
                    <li>
                        {/* {task}<button>Complete</button> */}
                        <span>
                            {task.text}
                        </span>
                        {!task.completed && (
                            <button onClick={() => completeFunction(task.id)} >
                                Complete
                            </button>
                        )}
                    </li>))}

            </ul>
        </div>
    )
}

export default TodoList


// import React from 'react';

// function TodoList({ todos, onComplete }) {
//   return (
//     <ul style={{ listStyle: 'none', padding: 0 }}>
//       {todos.map(todo => (
//         <li
//           key={todo.id}
//         >
//           <span>
//             {todo.text}
//           </span>
//           {!todo.completed && (
//             <button onClick={() => onComplete(todo.id)} >
//               Complete
//             </button>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;