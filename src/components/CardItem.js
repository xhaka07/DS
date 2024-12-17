// src/components/CardItem.js
import styles from './cardItem.module.css';

export default function CardItem({ title, bgColor, borderColor }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {title}
    </div>
  );
}
