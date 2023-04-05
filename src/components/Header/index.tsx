import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <>
        <Image
          src="/logo-todo-list.svg"
          alt="my-todo-logo"
          width={151}
          height={174} 
        />
      </>
    </header>
  );
}
