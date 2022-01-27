import React from "react";
import CollectionItems from "../CollectionItems";
import SectionHeading from "../SectionHeading";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionHeading>Collections</SectionHeading>
      <CollectionItems
        items={[{ text: "Images" }, { text: "Memes" }, { text: "Videos" }]}
      />
      <SectionHeading>Flow</SectionHeading>
    </main>
  );
};

export default Main;
