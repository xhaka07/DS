import styles from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/container">Container</Link>
      <Link href="/navbar">Navbar</Link>
      <Link href="/button">Button</Link>
      <Link href="/card">Card</Link>
    </nav>
  );
}
