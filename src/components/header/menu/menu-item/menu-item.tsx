import React from "react";
import styles from "./menu-item.module.css";
import { MenuItemProps } from "./menu-item.props";

export const MenuItem: React.FC<MenuItemProps> = ({ item }): JSX.Element => {
  return <li className={styles.headerUlLi}>{item}</li>;
};
