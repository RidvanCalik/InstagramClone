import React from "react";
import styles from "./main.module.css";

export default function Main() {
  return (
    <div>
      <div className={styles.Main}>
        <article className={styles.Content}>
          <div className={styles.LeftSide}>
            <img className={styles.ChangingIMG} alt="InstagramClone" />
          </div>
          <div className={styles.RightSide}></div>
        </article>
      </div>
    </div>
  );
}
