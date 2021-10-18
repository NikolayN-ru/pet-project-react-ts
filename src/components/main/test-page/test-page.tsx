import React, { useState } from "react";
import styles from "./test-page.module.css";
import TestItem from "./test-item";

const data = [
  { id: 1, question: "qwe", answers: ["1", "2", "3", "4"], rightAnswer: "2" },
  { id: 2, question: "asd", answers: ["1", "2", "3", "4"], rightAnswer: "1" },
  { id: 3, question: "zxc", answers: ["1", "2", "3", "4"], rightAnswer: "4" },
];

export const TestPage: React.FC = (): JSX.Element => {
  // const [state, setState] = useState(data);
  const [count, setCount] = useState(0);
  const [right, setRight] = useState(0);

  const onAnswer = (answer: string): void => {
    if (answer === data[count - 1].rightAnswer) {
      setRight((prev) => prev + 1);
    }
    setCount((prev) => prev + 1);
  };

  if (count > data.length) {
    return <p>правильных ответов - {right} - пройти тест еще раз |КНОПКА|</p>;
  }

  return (
    <div className={styles.container}>
      <p>{`вопрос ${count} из ${data.length}`}</p>
      {count ? (
        <TestItem itemTest={data[count - 1]} onAnswer={onAnswer} />
      ) : (
        <button onClick={() => setCount(1)}>начать тест</button>
      )}
    </div>
  );
};
