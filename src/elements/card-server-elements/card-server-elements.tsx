import React from "react";
import styles from "./card.module.css";

interface CardProps {
  name: string;
  id: number;
}

export const CardServerElements: React.FC<CardProps> = ({
  name, id
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <h2 className={styles.h2}>id: {id}</h2>
      <p>name: {name}</p>
    </div>
  );
};
