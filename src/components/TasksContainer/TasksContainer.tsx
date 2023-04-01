import React from 'react';
import { Info } from './Tasks/Info';
import { TaskList, Task } from './Tasks/TaskList';


export default function TasksContainer() {
  const created = 0;
  const concluded = 0;
  return (
    <>
      <Info created={created} concluded={concluded} />
      <TaskList tasks={TaskListProps} />
    </>
  );
}
