'use client';

import styles from './card.module.css'; 

export default function CardPage() {
  return (
    <div>
      <h2>Variasi Card</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <h3>Card 1</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
        <div className={styles.card2}>
          <h3>Card 2</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
        <div className={styles.card3}>
          <h3>Card 3</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
        <div className={styles.card4}>
          <h3>Card 4</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
        <div className={styles.card5}>
          <h3>Card 5</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
        <div className={styles.card6}>
          <h3>Card 6</h3>
          <p>Masukkan teks di bawah:</p>
          <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
          <button className={styles.cardButton}>Kirim</button>
        </div>
      </div>

      <h3>Penjelasan Kode:</h3>
      <pre>
        {`
<div className={styles.cardContainer}>
  <div className={styles.card1}>
    <h3>Card 1</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
  <div className={styles.card2}>
    <h3>Card 2</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
  <div className={styles.card3}>
    <h3>Card 3</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
  <div className={styles.card4}>
    <h3>Card 4</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
  <div className={styles.card5}>
    <h3>Card 5</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
  <div className={styles.card6}>
    <h3>Card 6</h3>
    <p>Masukkan teks di bawah:</p>
    <textarea placeholder="Tulis sesuatu..." className={styles.inputField}></textarea>
    <button className={styles.cardButton}>Kirim</button>
  </div>
</div>
        `}
      </pre>
    </div>
  );
}
