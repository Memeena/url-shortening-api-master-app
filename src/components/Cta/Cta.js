import React from "react";
import styles from "./Cta.module.css";
import "../../App.css";
import Button from "../Button/Button";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h2 className="small-heading">Boost your links today</h2>
      <Button />
    </section>
  );
}
