'use client';

import styles from './navbar.module.css';

export default function NavbarPage() {
  return (
    <div>
      <h2>Navbar Variasi dengan Tombol</h2>
      <nav className={styles.navbar1}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className={styles.navbarButtonContainer}>
          <button className={styles.squareButton}>Square Button</button>
          <button className={styles.roundedButton}>Rounded Button</button>
          <button className={styles.circularButton}>Circular Button</button>
        </div>
      </nav>
      <nav className={styles.navbar2}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className={styles.navbarButtonContainer}>
          <button className={styles.squareButton}>Square Button</button>
          <button className={styles.roundedButton}>Rounded Button</button>
          <button className={styles.circularButton}>Circular Button</button>
        </div>
      </nav>
      <nav className={styles.navbar3}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className={styles.navbarButtonContainer}>
          <button className={styles.squareButton}>Square Button</button>
          <button className={styles.roundedButton}>Rounded Button</button>
          <button className={styles.circularButton}>Circular Button</button>
        </div>
      </nav>
      <h3>Penjelasan Kode:</h3>
      <pre>
        {`
<nav className={styles.navbar1}>...</nav>
<nav className={styles.navbar2}>...</nav>
<nav className={styles.navbar3}>...</nav>
        `}
      </pre>
    </div>
  );
}
