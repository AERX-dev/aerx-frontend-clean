import React from "react";
import CollectionItem from "./CollectionItem";
import styles from "./styles.module.css";

const CollectionItems = (props) => {
  return (
    <div className={styles.collectionItems}>
      {props.items.map((item, idx) => (
        <CollectionItem key={idx} text={item.text} icon={item.icon} />
      ))}
    </div>
  );
};

export default CollectionItems;
