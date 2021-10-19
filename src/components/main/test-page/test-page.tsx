import React, { useState } from "react";
import styles from "./test-page.module.css";
import TestItem from "./test-item";
import Connect from "../../header/connect";

const data = [
  {
    id: 1,
    question: "Что такое React ?",
    answers: ["фреймворк", "ui-библиотека", "js-пакет", "идеология"],
    rightAnswer: "ui-библиотека",
  },
  {
    id: 2,
    question: "Что такое JSX ?",
    answers: ["расширение языка js", "отдельный язык", "три буквы", "незнаю"],
    rightAnswer: "расширение языка js",
  },
  {
    id: 3,
    question: "Что такое babel ?",
    answers: ["компилятор", "no", "no", "транспайлер"],
    rightAnswer: "транспайлер",
  },
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
    return (
      <div className={styles.container}>
        <p>
          правильных ответов - {right} -{" "}
          <div
            onClick={() => {
              setCount(1);
              setRight(0);
            }}
          >
            <br />
            <br />
            <Connect value={"пройти тест еще раз"} />
            <br />
          </div>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p>{`вопрос ${count} из ${data.length}`}</p>
      {count ? (
        <TestItem itemTest={data[count - 1]} onAnswer={onAnswer} />
      ) : (
        <div onClick={() => setCount(1)}>
          <Connect value={"начать тест"} />
        </div>
      )}
    </div>
  );
};
