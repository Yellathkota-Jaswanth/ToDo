// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('both');
  const [editTodo, setEditTodo] = useState(null);

  const addOrEditTodo = (todo) => {
    if (editTodo) {
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setEditTodo(null);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div>
      <TodoForm addOrEditTodo={addOrEditTodo} editTodoData={editTodo} />
      
      <div>
        <label>Filter by Status: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="both">Both</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}

export default TodoList;
