import React from "react";
import styles from "./search.module.css";

export const Search: React.FC = () => {
  return (
    <div className={styles.input}>
      <input placeholder="Search Rolling" />
      <img className={styles.searchIco} src="./search.svg" alt="search" />
    </div>
  );
};
