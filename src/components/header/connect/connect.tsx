import React from "react";
import styles from "./connect.module.css";

interface ConnectProps {
  value: string;
  onClick?: (event: Event) => void;
}

export const Connect: React.FC<ConnectProps> = ({value}): JSX.Element => {
  return <button className={styles.connect}>{value}</button>;
};
