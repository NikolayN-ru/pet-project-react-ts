import React from "react";
import styles from "./answer.module.css";

interface Answer {
  answer: string;
  onAnswer: (answer: string) => void;
}

export const Answer: React.FC<Answer> = ({ answer, onAnswer }): JSX.Element => {
  return (
    <div className={styles.answer} onClick={() => onAnswer(answer)}>
      {answer}
    </div>
  );
};
