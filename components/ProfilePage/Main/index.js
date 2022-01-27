import React from "react";
import ItemsList from "../ItemsList";
import styles from "./styles.module.css";
import { MdOndemandVideo } from "react-icons/md";

const Main = () => {
  return (
    <main className={styles.main}>
      <ItemsList
        title="Collections"
        items={[
          { text: "Images", icon: <MdOndemandVideo /> },
          { text: "Memes", icon: <MdOndemandVideo /> },
          { text: "Videos", icon: <MdOndemandVideo /> },
        ]}
      />
      <ItemsList
        title="Flow"
        items={[
          { text: "Images", icon: <MdOndemandVideo /> },
          { text: "Memes", icon: <MdOndemandVideo /> },
          { text: "Videos", icon: <MdOndemandVideo /> },
        ]}
      />
    </main>
  );
};

export default Main;
