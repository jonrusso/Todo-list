import React from 'react';
import Header from '@components/Header';
import AddTaskForm from '@components/AddTaskForm';
import TasksContainer from '@components/TasksContainer/TasksContainer';

const tasks = [
  {
    id: 1,
    content: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    content: "Go to the gym",
    completed: true,
  },
];

export default function TodoApp() {
  return (
    <>
      <Header />
      <AddTaskForm />
      <TasksContainer />
    </>
  );
}
