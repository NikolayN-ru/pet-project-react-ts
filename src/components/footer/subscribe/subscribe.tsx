import React from "react";
import styles from "./subscribe.module.css";

export const Subscribe: React.FC = (): JSX.Element => {
  return (
    <div className={styles.footerSubscribe}>
      <p>Get the latest Rolling updates</p>
      <div className={styles.footerSubscribeInput}>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
