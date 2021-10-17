import React, { useState } from "react";
import styles from "./todo-list.module.css";
import TodoItem from "./todoItem";

const data = [
  { id: 1, title: "learn redux", done: false, important: true },
  { id: 2, title: "learn GraphQL", done: false, important: false },
  { id: 3, title: "learn Webpack", done: true, important: true },
  { id: 4, title: "learn Thunk", done: false, important: false },
  { id: 5, title: "learn Saga", done: true, important: false },
  { id: 6, title: "learn css", done: true, important: true },
];

export const TodoList: React.FC = (): JSX.Element => {
  const [state, setState] = useState(data);
  return (
    <div className={styles.todoList}>
      <span>Todo-list</span>
      <ul>
        {state.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};
