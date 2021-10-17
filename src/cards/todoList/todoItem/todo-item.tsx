import React from "react";
import styles from "./todo-item.module.css";
import TodoItemProps from "./todo-item.props";

export const TodoItem: React.FC<TodoItemProps> = ({ item, setTodo }): JSX.Element => {
  const { id, title, done, important } = item;
  return (
    <li className={styles.todoItem} onClick={()=> setTodo(id)}>
            <span className={styles.span}> {important ? " YES " : " NO "}{'выполненно->>'} </span>
      -{title} -
       {/* {done ? " YES " : " NO "} - {important ? " YES " : " NO "} */}
      <span className={styles.span}> {'<<-важное'} {done ? " YES " : " NO "}</span>
    </li>
  );
};
