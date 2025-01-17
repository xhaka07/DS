import styles from '../styles/button.module.css';

export default function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
