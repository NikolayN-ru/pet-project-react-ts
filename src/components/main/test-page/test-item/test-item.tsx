import React from "react";
import styles from "./test-item.module.css";
import ItemProps from "./test-item.props";
import Answer from "./answer";

export const TestItem: React.FC<ItemProps> = ({ itemTest, onAnswer }): JSX.Element => {
  const { id, question, answers, rightAnswer } = itemTest;
  return (
    <div className={styles.item}>
      {id}--{answers}-{rightAnswer}
    <p>{question}</p>
    {answers.map((answer:string) => {
      return <Answer answer={answer} onAnswer={onAnswer}/>;
    })}
    </div>
  );
};
