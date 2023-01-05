import styles from "../styles/CardEducation.module.css";
import Image from "next/image";
import React from "react";

const CardsEducation = ({image, title, organization, date, description}) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <Image width={300} height={200} src={image} alt="html logo" />
          </div>
          <div className={styles.titleBx}>
            <h2>{title}</h2>
            <h3>{organization}</h3>
            <span>{date}</span>
          </div>
          <div className={styles.contentBx}>
            <p>{description}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default CardsEducation;
