import React from 'react';
import { Info } from './Tasks/Info';
import { TaskList, Task } from './Tasks/TaskList';
import styles from './TasksContainer.module.css';

type TaskCallBackId = (taskId: number) => void;

export type TaskCallBacks = {
  onToggle: TaskCallBackId;
  onDelete: TaskCallBackId;
}

interface TasksContainerProps extends TaskCallBacks {
  tasks: Task[];
}

export default function TasksContainer({ tasks, onToggle, onDelete }:TasksContainerProps) {
  const tasksCreated = tasks.length;
  const tasksConcluded = tasks.filter(task => task.completed).length;

  return (
    <div className={styles.tasksContainer}>
      <Info created={tasksCreated} concluded={tasksConcluded} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}
