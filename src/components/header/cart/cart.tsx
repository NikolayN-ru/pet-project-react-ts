import React from "react";
import styles from "./cart.module.css";

export const Cart: React.FC = (): JSX.Element => {
  return (
    <button className={styles.cart}>
      <img src="./cart.svg" />
    </button>
  );
};
