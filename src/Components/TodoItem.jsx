// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, onEdit, onDelete, onStatusChange }) {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onStatusChange(todo.id, newStatus);
  };

  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <p>
        Status: 
        <select value={status} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </p>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
