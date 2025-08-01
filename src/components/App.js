import React, { useState, useCallback } from 'react';
import './styles.css';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const handleDelete = useCallback((index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }, [todos]);

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <div className="controls">
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={increment}>Increment</button>
        <p>Counter: {counter}</p>
        <input
          type="text"
          placeholder="Enter custom todo"
          value={input}
          onChange={handleInput}
          className="todo-input"
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>

      <UseMemoComponent todos={todos} />
      <ReactMemoComponent todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
