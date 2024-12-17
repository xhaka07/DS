"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Menu</h3>
      <Link href="/">Home</Link>
      <Link href="/container">Container</Link>
      <Link href="/button">Button</Link>
      <Link href="/card">Card</Link>
      <Link href="/navbar">Navbar</Link>
    </div>
  );
}
