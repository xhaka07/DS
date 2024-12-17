import styles from "./container.module.css";

export default function ContainerPage() {
  return (
    <div className={styles.container}>
      <h2>Container Component</h2>
      <div className={styles.box}>Ini adalah contoh container</div>
      <h3>Penjelasan Kode:</h3>
      <pre>
        {`
<div className={styles.container}>
  <div className={styles.box}>Isi Container</div>
</div>
        `}
      </pre>
    </div>
  );
}
