import React, { useState } from 'react';
import styles from './addTaskForm.module.css';
import {  PlusCircle } from '@phosphor-icons/react';

interface AddTaskFormProps {
  onAddTask: (content: string) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if (inputValue.trim()) {
        onAddTask(inputValue.trim());
        setInputValue('');
      }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <input 
        className={styles.inputTask}
        type="text" 
        placeholder='Add a new task📝..'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.createTask}>
        <span>Add</span>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}