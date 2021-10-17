import React from "react";
import styles from "./links.module.css";
import Link from "./link";

const data = [
  ["Rolling", "Explore", "Blog", "About us", "Become a partner"],
  ["Community", "Community Guidelines", "Roll Token", "Discussion"],
];

export const Links: React.FC = (): JSX.Element => {
  return (
    <div className={styles.footerMenu}>
      <ul>
        {data[0].map((item) => {
          return <Link item={item} />;
        })}
      </ul>
      <ul>
        {data[1].map((item) => {
          return <Link item={item} />;
        })}
      </ul>
    </div>
  );
};
