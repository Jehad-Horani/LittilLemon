'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.topBar}>

          <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
            <Link href="/">
            <img src="/logo.png" width="150" height="auto" alt="Logo" />
            </Link>
        </div>

        <ul className={`${styles.navList} ${isOpen ? styles.show : ''}`}>
          <li>
            <Link href="/" className={styles.logo}>
            <img src="/logo.png" width="150" height="auto" alt="Logo" />
            </Link>
            </li>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/reservation">Reservation</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/order">Order Online</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
