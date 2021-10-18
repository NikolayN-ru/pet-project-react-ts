import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu-item.module.css";
import { MenuItemProps } from "./menu-item.props";

export const MenuItem: React.FC<MenuItemProps> = ({ item:{name, path} }): JSX.Element => {
  return (
    <li className={styles.headerUlLi}>
      <Link to={path} className={styles.link}>{name}</Link>
    </li>
  );
};
