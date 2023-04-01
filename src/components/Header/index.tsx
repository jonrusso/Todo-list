import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.svg" alt="my-todo-logo" />
    </header>
  )
}