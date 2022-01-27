import React, { useState } from "react";
import styles from "./styles.module.css";

const SectionHeading = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <p className={styles.heading}>
      <div className={styles.line}></div>
      <div className={styles.title}>
        {props.children}
        <span
          className={`${styles.arrow} ${
            isExpanded ? styles.arrowUp : styles.arrowDown
          }`}
        ></span>
      </div>
      <div className={styles.line}></div>
    </p>
  );
};

export default SectionHeading;
