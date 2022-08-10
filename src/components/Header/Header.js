import React from "react";
import styles from "./Header.module.css";
import HeaderImg from "../../images/illustration-working.svg";
import "../../App.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.headerImg} src={HeaderImg} alt="Illustration" />
      <h1 className={`${styles.headerHeading} ${`heading`}`}>
        More than just shorter links
      </h1>
      <p className={`${styles.headerDesc} ${`description`}`}>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <a className={styles.button} href="#">
        Get Started
      </a>
    </div>
  );
}
