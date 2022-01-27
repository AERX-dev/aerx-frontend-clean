import React from "react";
import Card from "../../../UI/Card";
import styles from "./styles.module.css";

const CollectionItem = (props) => {
  return (
    <Card>
      <div className={styles.text}>{props.text}</div>
    </Card>
  );
};

export default CollectionItem;
