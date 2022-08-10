import React from "react";
import styles from "../Shorten.module.css";
// import styles from "./ShortLink.module.css";

export default function ShortLink(props) {
  // console.log(props);

  const dynamicStyle = {
    backgroundColor: props.isCopy ? "hsl(255, 11%, 22%)" : "hsl(180, 66%, 49%)",
  };

  const errorElement = (
    <div className={`${styles.error} ${styles.result}`}>{props.errMsg}</div>
  );

  const shortLinkElement = (
    <div className={styles.result}>
      <p className={styles.link}>{props.link}</p>
      <p className={styles.shortLink}>{props.resultLink}</p>
      <button
        className={styles.copy}
        style={dynamicStyle}
        onClick={(event) => props.handleCopy(event, props.id, props.resultLink)}
      >
        {props.isCopy ? "Copied!" : "Copy"}
      </button>
    </div>
  );
  return (
    //
    <div>{props.isError ? errorElement : shortLinkElement}</div>
  );
}
