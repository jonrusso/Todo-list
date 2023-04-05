import React from 'react';
import styles from './TaskList.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import * as Checkbox from "@radix-ui/react-checkbox";
import { EmptyTaskList } from './EmptyTaskList';

export interface Task {
  id: number;
  content: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyTaskList />;
  }
  return (
    <div className={styles.tasksWrapper}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.list}>
          <Checkbox.Root
            checked={task.completed}
            onCheckedChange={() => {}}
            className={styles.checkbox}
          >
            <div className={styles.checkboxIndicator}>
              <Checkbox.Indicator>
                <Check size={24} className={styles.checkIcon} />
              </Checkbox.Indicator>
            </div>
          </Checkbox.Root>
          <span className={styles.taskContent}>{task.content}</span>
          <button 
            className={styles.trashIcon}>
            <Trash size={24} 
            />
          </button>
        </div>
      ))}
    </div>
  );
}
