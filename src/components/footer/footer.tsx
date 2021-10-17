import React from "react";
import styles from "./footer.module.css";
import Subscribe from "./subscribe";
import Links from "./links";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <div className={styles.footer}>
        <Subscribe />
        <Links />
      </div>
      <img src="./line2.svg" alt="" />
      <div className={styles.footerLinks}>
        <div className={styles.footerLinksBlock1}>
          <span>Rolling</span>
          <span>Terms of Service</span>
          <span>Privacy</span>
        </div>
        <div className={styles.footerLinksBlock2}>
          tvitter-facebook-vk-instagramm
        </div>
      </div>
    </footer>
  );
};
