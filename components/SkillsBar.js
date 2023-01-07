import React from "react";
import styles from "../styles/SkillsBar.module.css";

const SkillsBar = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.container}>
      <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
        <p>JavaScript</p>
        <div className={styles.loading}></div>
      </div>
    </div>
  );
};

export default SkillsBar;
