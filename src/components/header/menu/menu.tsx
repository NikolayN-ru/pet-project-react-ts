import React, { useState } from "react";
import styles from "./menu.module.css";
import MenuItem from "./menu-item";

const data = [
  { name: "Todos", path: "/" },
  { name: "Server", path: "/server" },
  { name: "Test", path: "/test" },
  { name: "Constructor", path: "/cite" },
];

export const Menu: React.FC = (): JSX.Element => {
  const [state, setState] = useState(data);
  return (
    <ul className={styles.menu}>
      {state.map((item, id) => {
        return <MenuItem key={id} item={item} />;
      })}
    </ul>
  );
};
