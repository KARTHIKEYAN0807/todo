import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name,
      description,
      status: 'Not Completed',
    });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Todo Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo Description"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
