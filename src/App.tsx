import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Card from "./cards/card";

export const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Main />
      <Card />
      <Footer />
    </div>
  );
};
