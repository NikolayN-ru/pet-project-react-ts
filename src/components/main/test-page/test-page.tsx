import React, { useState } from "react";
import styles from "./test-page.module.css";
import TestItem from "./test-item";

const data = [
  { id: 1, question: "qwe", answers: [1, 2, 3, 4], rightAnswer: 2 },
  { id: 2, question: "asd", answers: [1, 2, 3, 4], rightAnswer: 1 },
  { id: 3, question: "zxc", answers: [1, 2, 3, 4], rightAnswer: 4 },
];

export const TestPage: React.FC = (): JSX.Element => {
  const [state, setState] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <div>
      {count ? (
        <TestItem />
      ) : (
        <button onClick={() => setCount(1)}>начать тест</button>
      )}
    </div>
  );
};
