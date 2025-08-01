import React, { useMemo } from 'react';

function UseMemoComponent({ todos }) {
  const longTodos = useMemo(() => {
    return todos.filter(todo => todo.length > 5);
  }, [todos]);

  return (
    <div className="use-memo">
      <h2>Todos with more than 5 characters:</h2>
      <ul>
        {longTodos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoComponent;

