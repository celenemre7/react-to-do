import React, { useState } from 'react';
import './App.css'; // CSS dosyasını import et

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };


  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do Uygulaması</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Yeni görev ekle"
        />
        <button onClick={addTodo} className="todo-add-button">
          Ekle
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <div className="todo-buttons">
              <button 
                onClick={() => toggleTodo(todo.id)} 
                className="todo-toggle-button"
                title={todo.completed ? "Görevi tamamlanmamış olarak işaretle" : "Görevi tamamlandı olarak işaretle"}
              >
                {todo.completed ? '↩️' : '✅'}
              </button>
              <button 
                onClick={() => deleteTodo(todo.id)} 
                className="todo-delete-button"
                title="Görevi sil"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;