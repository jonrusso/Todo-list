import React from 'react';
import styles from './TaskList.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import * as Checkbox from "@radix-ui/react-checkbox";
import { EmptyTaskList } from './EmptyTaskList';
import { TaskCallBacks } from '@components/TasksContainer/TasksContainer';

export interface Task {
  id: number;
  content: string;
  completed: boolean;
}

interface TaskListProps extends TaskCallBacks {
  tasks: Task[];
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyTaskList />;
  }
  return (
    <div className={styles.tasksWrapper}>
      {tasks.map((task) => (
        <div key={task.id} 
        className={`${styles.list} ${task.completed ? styles.listCompleted : ''}`}>
          <Checkbox.Root
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
            className={styles.checkbox}
          >
            <div className={styles.checkboxIndicator}>
              <Checkbox.Indicator>
                <Check 
                  size={24} 
                  className={styles.checkIcon} 
                />
              </Checkbox.Indicator>
            </div>
          </Checkbox.Root>
          <span 
            className={`${styles.taskContent} ${task.completed ? styles.taskContentCompleted : ''}`}>
            {task.content}
            </span>
          <button 
            className={styles.trashIcon}
            onClick={() => onDelete(task.id)}
            >
            <Trash size={24} 
            />
          </button>
        </div>
      ))}
    </div>
  );
}
