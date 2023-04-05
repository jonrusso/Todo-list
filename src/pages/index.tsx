// App.tsx ou componente principal
import React, { useState } from 'react';
import { Task } from '@components/TasksContainer/Tasks/TaskList';
import Header from '@components/Header';
import AddTaskForm from '@components/AddTaskForm';
import TasksContainer from '@components/TasksContainer/TasksContainer';

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([
  ]);

  const addTask = (content: string) => {
    const newTask: Task = {
      id: Date.now(),
      content,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <Header />
      <AddTaskForm onAddTask={addTask} />
      <TasksContainer tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </>
  );
}
