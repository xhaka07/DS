import CardItem from './CardItem';
import styles from './cardRow.module.css';

export default function CardRow() {
  return (
    <div className={styles.cardRow}>
      <CardItem title="Card 1" bgColor="#f0f0f0" borderColor="#ddd" />
      <CardItem title="Card 2" bgColor="#ffcccb" borderColor="red" />
      <CardItem title="Card 3" bgColor="#bde0fe" borderColor="blue" />
    </div>
  );
}
