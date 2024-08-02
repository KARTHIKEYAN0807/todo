import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    return todo.status === filter;
  });

  return (
    <div className="app">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter">
        <label>Status Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
