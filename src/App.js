import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import React, { useEffect, useState, useCallback } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(savedTasks || []);
  }, []);

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.removeItem('tasks');
    } else {
      const timer = setTimeout(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [tasks]);

  const addTask = useCallback((name) => {
    setTasks(prev => [...prev, { name, done: false }]);
  }, []);

  const removeTask = useCallback((indexToRemove) => {
    setTasks(prev => prev.filter((_, index) => index !== indexToRemove));
  }, []);

  const updateTaskDone = useCallback((taskIndex, newDone) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }, []);

  const renameTask = useCallback((index, newName) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }, []);

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  const getMessage = useCallback(() => {
    if (numberTotal === 0) return 'Add some tasks! ✍️';  
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) return 'Try to do at least one! 🙏';
    if (percentage === 100) return 'Nice Job for today! 👌';
    return 'Keep it going 💪';
  }, [numberComplete, numberTotal]);
  

  return (
    <main>
      <h1>{numberComplete}/{numberTotal} Complete</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          {...task}
          onRename={newName => renameTask(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={done => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default App;
