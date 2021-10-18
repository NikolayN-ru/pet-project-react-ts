import React, { useState } from "react";
import styles from "./card.module.css";
import Description from "../description";
import TodoList from "../todoList";
import { CardProps, ItemProps } from "./card.props";

const data = [
  { id: 1, title: "learn redux", done: false, important: true },
  { id: 2, title: "learn GraphQL", done: false, important: false },
  { id: 3, title: "learn Webpack", done: true, important: true },
  { id: 4, title: "learn Babel", done: false, important: false },
  { id: 5, title: "learn Saga", done: true, important: false },
  { id: 6, title: "learn css", done: true, important: true },
];

let idx = 20;

const dataCard = { id: 0, title: "", done: null, important: null };

export const Card: React.FC = (): JSX.Element => {
  const [state, setState] = useState<Array<CardProps>>(data);
  const [todoCard, setTodoCard] = useState<CardProps>(dataCard);

  const toggleDone = (id: number): void => {
    let item: any = state.find((item) => item.id === id);
    item.done = !item.done;
    setTodoCard({ ...item });
  };

  const setTodo = (id: number): void => {
    const item: any = state.find((item: CardProps) => item.id === id);
    setTodoCard({ ...item });
  };

  const addTodo = (title: string): void => {
    console.log(title);
    const newItem = { id: idx + 1, title, done: false, important: false };
    setState((prev) => {
      return [...state, newItem];
    });
  };

  const removeTodo = (id: number): void => {
    const idIndex = state.findIndex((item) => item.id === id);
    const newArray = [...state.slice(0, idIndex), ...state.slice(idIndex + 1)];
    setState((prev) => {
      return newArray;
    });
    setTodoCard(dataCard);
  };

  const toggleImp = (id: number): void => {
    let item: any = state.find((item) => item.id === id);
    item.important = !item.important;
    setTodoCard({ ...item });
  };

  const upTop = (id: number): void => {
    const idIndex = state.findIndex((item) => item.id === id);
    let item: any = state.find((item) => item.id === id);
    const newArray = [
      item,
      ...state.slice(0, idIndex),
      ...state.slice(idIndex + 1),
    ];
    setState((prev) => {
      return newArray;
    });
  };

  return (
    <section className={styles.card}>
      <div className={styles.cardPhoto}>
        <TodoList data={state} setTodo={setTodo} addTodo={addTodo} />
        {/* <img src="./ring.jpg" alt="" /> */}
      </div>
      <Description
        todoCard={todoCard}
        toggleDone={toggleDone}
        removeTodo={removeTodo}
        toggleImp={toggleImp}
        upTop={upTop}
      />
    </section>
  );
};
