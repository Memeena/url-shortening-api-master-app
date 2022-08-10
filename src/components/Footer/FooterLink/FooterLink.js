import React from "react";
import styles from "./FooterLink.module.css";

export default function FooterLink(props) {
  const linkElements = props.link.map((link) => (
    <li className={styles.item}>{link}</li>
  ));
  return (
    <div className={styles.footerLink}>
      <h1>{props.heading}</h1>
      <ul className={styles.list}>{linkElements}</ul>
    </div>
  );
}
