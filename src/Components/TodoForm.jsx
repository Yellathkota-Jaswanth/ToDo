// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

function TodoForm({ addOrEditTodo, editTodoData }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  useEffect(() => {
    if (editTodoData) {
      setTaskName(editTodoData.taskName);
      setDescription(editTodoData.description);
      setStatus(editTodoData.status);
    }
  }, [editTodoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: editTodoData ? editTodoData.id : Date.now(),
      taskName,
      description,
      status,
    };
    addOrEditTodo(todo);
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  return (
    <div className='border'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editTodoData ? 'Update Todo' : 'Add Todo'}</button>
    </form>
    </div>
  );
}

export default TodoForm;
