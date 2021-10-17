import React, { useState } from "react";
import styles from "./card.module.css";
import Description from "../description";
import TodoList from "../todoList";
import CardProps from "./card.props";

const data = [
  { id: 1, title: "learn redux", done: false, important: true },
  { id: 2, title: "learn GraphQL", done: false, important: false },
  { id: 3, title: "learn Webpack", done: true, important: true },
  { id: 4, title: "learn Thunk", done: false, important: false },
  { id: 5, title: "learn Saga", done: true, important: false },
  { id: 6, title: "learn css", done: true, important: true },
];

const dataCard = { id: 0, title: "", done: null, important: null };

export const Card: React.FC = (): JSX.Element => {
  const [state, setState] = useState<Array<CardProps>>(data);
  const [todoCard, setTodoCard] = useState<CardProps>(dataCard);

  const toggleDone = (id: number) => {
    // interface ItemProps {
    //   id: number;
    //   title: string;
    //   done: boolean;
    //   important: boolean;
    // }
    //   const item = state.find((item) => item.id === id);
    //     item.done = !item.done;
    //   console.log(id);
    // console.log(id)
    // setState((prev) =>
    //   prev.map((todo) => {
    //     if (todo.id === id) {
    //       const item = !todo.done
    //       todo.done = item
    //     }
    //     return todo;
    //   })
    // );
    // const res = window.confirm('Are you sure you want to')
  };

  const setTodo = (id: number) => {
    const item: any = state.find((item: CardProps) => item.id === id);
    // setTodoCard({id: item.id, title: item.title, done: item.done, important: item.important})
    setTodoCard({ ...item });
  };

  const addTodo = (id: number) => {
    console.log(id);
  };

  const removeTodo = (id: number) => {
    console.log(id)
  }

  return (
    <section className={styles.card}>
      <div className={styles.cardPhoto}>
        <TodoList data={state} setTodo={setTodo} addTodo={addTodo} />
        {/* <img src="./ring.jpg" alt="" /> */}
      </div>
      <Description todoCard={todoCard} toggleDone={toggleDone} />
    </section>
  );
};
