import React from "react";
import styles from "./card.module.css";
import Description from "../description";
import TodoList from '../todoList';

export const Card: React.FC = (): JSX.Element => {
  return (
    <section className={styles.card}>
      <div className={styles.cardPhoto}>
        <TodoList />
        {/* <img src="./ring.jpg" alt="" /> */}
      </div>
      <Description />
    </section>
  );
};
