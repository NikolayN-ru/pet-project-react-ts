import React from "react";
import styles from "./description.module.css";
import DescriptionProps from "./description.props";

export const Description: React.FC<DescriptionProps> = ({
  toggleDone,
  removeTodo,
  toggleImp,
  upTop,
  todoCard: { id, title, done, important },
}): JSX.Element => {
  const string = "choose one of the cases";

  const AnimationTop = () => {
    upTop(id);
  };

  return (
    <div className={styles.cardDescription}>
      {done ? (
        <h2 style={{ textDecoration: "line-through" }}>
          {title ? title : string}
        </h2>
      ) : (
        <h2>{title ? title : string}</h2>
      )}
      <div className={styles.cardDescriptionAvatar}>
        <img src="./static/avatar.png" alt="" />
        <span>Tung Tran</span>
      </div>
      <div className={styles.cardDescriptionOffer}>
        <div className={styles.price}>
          <p className={styles.price3}>Current Bid</p>
          <p className={styles.price2}>0.85 ETH</p>
          <p className={styles.price3}>$2,169.42</p>
        </div>
        <img src="./static/line.svg" alt="" />
        <div className={styles.time}>
          <p onClick={() => toggleImp(id)} className={styles.price3}>
            {important ? "Add " : "remove "}IMPORTANT
          </p>
          <p className={styles.price2}>time 3 16 58</p>
          <p onClick={AnimationTop} className={styles.price3}>
            raise to the top
          </p>
        </div>
      </div>
      {id && (
        <>
          <button
            className={styles.cardDescriptionBtn}
            onClick={() => toggleDone(id)}
          >
            Done-toggle
          </button>
          <p onClick={() => removeTodo(id)}>Delete todo</p>
        </>
      )}
    </div>
  );
};
