'use client';

import styles from "./button.module.css";

export default function ButtonPage() {
  return (
    <div>
      <h2>Button Variasi</h2>
      
      <button className={styles.primaryButton}>Primary</button>
      <button className={styles.secondaryButton}>Secondary</button>
      <button className={styles.dangerButton}>Danger</button>

      <h3>Penjelasan Kode:</h3>
      <pre>
        {`
<button className={styles.primaryButton}>Primary</button>
<button className={styles.secondaryButton}>Secondary</button>
<button className={styles.dangerButton}>Danger</button>
        `}
      </pre>
    </div>
  );
}
