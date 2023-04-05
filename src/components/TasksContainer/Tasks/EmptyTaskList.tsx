import React from 'react';
import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img 
        src='/clipboard.svg' 
        alt='clipboard-icon' 
        className={styles.clipBoardIcon}
       />
      <p 
      className={styles.emptyTaskListText}>
      ❗You don't have any tasks added yet. Add some tasks and organise your <span>to</span><span>do</span> items.
      </p>
    </div>
  );
}
