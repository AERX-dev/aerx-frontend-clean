import React from "react";
import CollectionItem from "./Item";
import SectionHeading from "./SectionHeading";
import styles from "./styles.module.css";

const CollectionItemsList = (props) => {
  return (
    <>
      <SectionHeading>{props.title}</SectionHeading>
      <div className={styles.itemsList}>
        {props.items.map((item, idx) => (
          <CollectionItem key={idx} text={item.text} icon={item.icon} />
        ))}
      </div>
    </>
  );
};

export default CollectionItemsList;
