import React from 'react';

const ReactMemoComponent = React.memo(({ todos, onDelete }) => {
  return (
    <div className="react-memo">
      <h2>All Todos:</h2>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => onDelete(i)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;

