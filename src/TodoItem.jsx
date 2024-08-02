import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleSave = () => {
    updateTodo(todo.id, {
      ...todo,
      name: editedName,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    updateTodo(todo.id, { ...todo, status: e.target.value });
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <select value={todo.status} onChange={handleStatusChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
