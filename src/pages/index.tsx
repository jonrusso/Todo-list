import React from 'react';
import Header from '@components/Header';
import AddTaskForm from '@components/AddTaskForm';
import TasksContainer from '@components/TasksContainer/TasksContainer';

const tasks = [
  {
    id: 1,
    description: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    description: "Go to the gym",
    completed: true,
  },
];

export default function TodoApp() {
  return (
    <>
      <Header />
      <AddTaskForm />
      <TasksContainer tasks={tasks} />
    </>
  );
}
