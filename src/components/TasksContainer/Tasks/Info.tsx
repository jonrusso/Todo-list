import React from 'react';
import styles from './Info.module.css';

interface InfoProps {
  created: number;
  concluded: number;
}

export function Info({ created, concluded }:InfoProps) {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.taskCreated}>
        <strong>Tasks Created</strong>
        <span>{created}</span>
      </div>
      <div className={styles.taskDone}>
        <strong>Concluded</strong>
        <span>{concluded} de {created}</span>
      </div>
    </div>
  )
}