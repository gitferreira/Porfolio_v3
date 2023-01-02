import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Techstack.module.css";
import ModalExample from "./Modal";

const Techstack = () => {
  return (
    <div className={styles.techstack}>
      <div>
        <h3>Base Stack</h3>
        <div className={styles.tech_section}>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/html.png"
              alt="html logo"
            />
          </div>
          <div className={styles.container}>
            <Image width={150} height={200} src="/img/css.png" alt="css logo" />
          </div>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/javs.svg"
              alt="javascript logo"
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Main Frontend Libraries / Frameworks</h3>
        <div className={styles.tech_section}>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/rere.png"
              alt="html logo"
            />
          </div>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/vue.png"
              alt="html logo"
            />
          </div>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/bootstrapp.png"
              alt="html logo"
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Main Backend Technologies</h3>
        <div className={styles.tech_section}>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/nod.png"
              alt="html logo"
            />
          </div>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/mongo.png"
              alt="html logo"
            />
          </div>
          <div className={styles.container}>
            <Image
              width={200}
              height={200}
              src="/img/sql.png"
              alt="html logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.tech_list}>
        <ModalExample />
      </div>
    </div>
  );
};

export default Techstack;
