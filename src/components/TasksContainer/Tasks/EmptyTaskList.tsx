import React from 'react';
import styles from './EmptyTaskList.module.css';
import Image from 'next/image';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <Image 
        src='/clipboard.svg' 
        alt='clipboard-icon' 
        className={styles.clipBoardIcon}
        width={56}
        height={56}
       />
      <p 
      className={styles.emptyTaskListText}>
      ❗You don't have any tasks added yet. Add some tasks and organise your <span>to</span><span>do</span> items.
      </p>
    </div>
  );
}
