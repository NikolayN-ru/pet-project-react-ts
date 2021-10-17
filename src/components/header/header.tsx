import React from "react";
import styles from "./header.module.css";
import Search from "./search";
import Menu from "./menu";
import Cart from "./cart";
import Connect from "./connect";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Rolling</h1>
      <Search />
      <Menu />
      <Cart />
      <Connect />
    </header>
  );
};
