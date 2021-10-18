import React, { useState } from "react";
import styles from "./todo-list.module.css";
import TodoItem from "./todoItem";
import TodoListProps from "./todo-list.props";
import SearchPanel from "../../elements/input-panel";

export const TodoList: React.FC<TodoListProps> = ({
  data,
  setTodo,
  addTodo
}): JSX.Element => {
  return (
    <div className={styles.todoList}>
      <span>Todo-list</span>
      <SearchPanel addTodo={addTodo}/>
      <ul>
        {data.map((item) => {
          return <TodoItem key={item.id} item={item} setTodo={setTodo} />;
        })}
      </ul>
    </div>
  );
};
