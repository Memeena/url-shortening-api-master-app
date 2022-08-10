import React from "react";
import styles from "./Card.module.css";
import "../../../App.css";

export default function Card(props) {
  return (
    <div className={styles.cards}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={`../images/${props.img}`} />
      </div>

      <h3 className={styles.heading}>{props.heading}</h3>
      <p className={`${styles.cardDesc} ${`description`}`}>
        {props.description}
      </p>
    </div>
  );
}
