import React from 'react';
import styles from './addTaskForm.module.css';
import {  PlusCircle } from '@phosphor-icons/react';

export default function AddTaskForm() {
  return (
    <div className={styles.formWrapper}>
      <input 
        className={styles.inputTask}
        type="text" 
        placeholder='Add a new task📝..'
      />
      <button className={styles.createTask}>
        <span>Add</span>
        <PlusCircle size={16} />
      </button>
    </div>
  )
}