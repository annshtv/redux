// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTaskCompletion, setFilter } from './redux/actions';
import './App.css';

const ToDoApp = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');

  // Добавление новой задачи
  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: 'medium',
      };
      dispatch(addTask(newTaskObj)); // Добавляем задачу через dispatch
      setNewTask('');
    }
  };

  // Переключение состояния завершенности задачи
  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id)); // Переключаем завершенность задачи
  };

  // Удаление задачи
  const handleDeleteTask = (id) => {
    dispatch(removeTask(id)); // Удаляем задачу через dispatch
  };

  // Фильтрация задач
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'active') return !task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks"
        />
      </div>

      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('active'))}>Active</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleCompletion(task.id)}>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
