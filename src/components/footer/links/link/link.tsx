import React from "react";
import styles from "./link.module.css";
import { LinkProps } from "./link.props";

export const Link: React.FC<LinkProps> = ({ item }): JSX.Element => {
  return (
    <div>
      <li className={styles.li}>{item}</li>
    </div>
  );
};
