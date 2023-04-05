import React from 'react';
import { Info } from './Tasks/Info';
import { TaskList, Task } from './Tasks/TaskList';
import styles from './TasksContainer.module.css';

export default function TasksContainer() {
  const created = 3;
  const concluded = 1;

  const tasks: Task[] = [
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
    {
      id: 3,
      content: "Read 1 chapter of a book",
      completed: false,
    },
  ];

  return (
    <div className={styles.tasksContainer}>
      <Info created={created} concluded={concluded} />
      <TaskList tasks={tasks} />
    </div>
  );
}
