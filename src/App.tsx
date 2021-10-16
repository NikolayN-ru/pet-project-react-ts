import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/header";

export const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <Header />
      main
      <p>footer</p>
    </div>
  );
};
