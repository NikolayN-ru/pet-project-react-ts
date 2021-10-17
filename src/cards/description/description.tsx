import React from "react";
import styles from "./description.module.css";
import DescriptionProps from "./description.props";

export const Description: React.FC<DescriptionProps> = ({
  toggleDone,
  todoCard: { id, title, done, important },
}): JSX.Element => {
  return (
    <div className={styles.cardDescription}>
      {done ? (
        <h2 style={{ textDecoration: "line-through" }}>
          {title ? title : "choose one of the cases"}
        </h2>
      ) : (
        <h2>{title ? title : "choose one of the cases"}</h2>
      )}
      <div className={styles.cardDescriptionAvatar}>
        <img src="./static/avatar.png" alt="" />
        <span>Tung Tran</span>
      </div>
      <div className={styles.cardDescriptionOffer}>
        <div className={styles.price}>
          <p className={styles.price1}>Current Bid</p>
          <p className={styles.price2}>0.85 ETH</p>
          <p className={styles.price3}>$2,169.42</p>
        </div>
        <img src="./static/line.svg" alt="" />
        <div className={styles.time}>
          <p className={styles.price1}>Auction ends in</p>
          <p className={styles.price2}>time 3 16 58</p>
          <p className={styles.price3}>Hours Minutes Seconds</p>
        </div>
      </div>
      <button
        className={styles.cardDescriptionBtn}
        onClick={() => toggleDone(id)}
      >
        Done-todo
      </button>
      <p>
        <a href="!#">View artwork</a>
      </p>
    </div>
  );
};
