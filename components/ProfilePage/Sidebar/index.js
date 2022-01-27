import React from "react";
import styles from "./styles.module.css";

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar} {...props}>
      This is sidebar
    </aside>
  );
};

export default Sidebar;
