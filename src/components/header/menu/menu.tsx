import React, { useState } from "react";
import styles from "./menu.module.css";
import MenuItem from "./menu-item";

const data = ["Todos", "Server", "Test", "Constructor"];

export const Menu: React.FC = (): JSX.Element => {
  const [state, setState] = useState<string[]>(data);
  return (
    <ul className={styles.menu}>
      {state.map((item) => {
        return <MenuItem item={item} />;
      })}
    </ul>
  );
};
