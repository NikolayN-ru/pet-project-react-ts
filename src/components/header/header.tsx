import React from "react";
import styles from "./header.module.css";
import Search from "./search";

export const Header: React.FC = () => {
  return (
    <header>
      <h1>Rolling</h1>
      <Search />

      <ul className={styles.menu}>
        <li>Server</li>
        <li>Todos</li>
        <li>Cart</li>
        <li>Test</li>
      </ul>
      <button className={styles.cart}>
        <img src="./static/cart.svg" />
      </button>
      <button className={styles.connect}>Connect Wallet</button>
    </header>
  );
};
