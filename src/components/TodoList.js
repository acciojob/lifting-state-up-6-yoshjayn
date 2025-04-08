// import React from 'react';


// const TodoList = ({listProp}) => {
//     return (
//         <div style={{ margin: '20px' }}>
//             <h2 style={{ marginLeft: '20px' }}>Child Component</h2>
//             <ul>
//                 {listProp.map(elem=>(<li>{elem}<button>Complete</button></li>))}
                
//             </ul>
//         </div>
//     )
// }

// export default TodoList
import React from 'react';

function TodoList({ todos, onComplete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li 
          key={todo.id}
          style={{ 
            margin: '8px 0',
            padding: '8px',
            backgroundColor: todo.completed ? '#e8f5e9' : '#fff3e0',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button 
              onClick={() => onComplete(todo.id)}
              style={{
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;