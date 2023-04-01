import React from 'react';
import styles from './TaskList.module.css';

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
}

export function TaskList( tasks : TaskListProps) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskItem}>
          <input type="radio" checked={task.completed} />
          <span>{task.description}</span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
