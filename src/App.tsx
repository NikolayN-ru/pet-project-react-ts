import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Card from "./cards/card";
import Test from "./components/main/test-page";

export const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <Router>
        <Header />
        <Route exact path="/" component={Card} />
        <Route path="/test" component={Test} />
        <Route path="/main" component={Main} />
        <Footer />
      </Router>
    </div>
  );
};
