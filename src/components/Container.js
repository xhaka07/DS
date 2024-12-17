import styles from '../styles/container.module.css';

export default function Container({ size, children }) {
  return <div className={`${styles.container} ${styles[size]}`}>{children}</div>;
}
