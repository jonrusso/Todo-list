import React from 'react';
import { Info } from './Tasks/Info';
import { TaskList, Task } from './Tasks/TaskList';
import styles from './TasksContainer.module.css';

export default function TasksContainer() {
  const created = 3;
  const concluded = 1;

  const tasks: Task[] = [
    
  ];

  return (
    <div className={styles.tasksContainer}>
      <Info created={created} concluded={concluded} />
      <TaskList tasks={tasks} />
    </div>
  );
}
