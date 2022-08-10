import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  console.log(props);
  return (
    <a className={styles.button} href="#">
      Get Started
    </a>
  );
}
