import React, { useState, useEffect } from "react";
import styles from "../styles/SkillsBar.module.css";

const SkillsBar = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <p>HTML5 / CSS3 </p>
        <div className={styles.loading1} />
        <p>JavaScript</p>
        <div className={styles.loading2} />
        <p>UX / UY</p>
        <div className={styles.loading3} />
        <p>Web Design</p>
        <div className={styles.loading4} />
      </div>
      <div className={styles.container}>
        <p>React.js</p>
        <div className={styles.loading5} />
        <p>Vue.js</p>
        <div className={styles.loading6} />
        <p>Node.js</p>
        <div className={styles.loading7} />
        <p>TypeScript (Currently Learning)</p>
        <div className={styles.loading8} />
      </div>
    </div>
  );
};

export default SkillsBar;
