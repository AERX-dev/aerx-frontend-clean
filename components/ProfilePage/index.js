import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Main />
      </div>
    </div>
  );
};

export default ProfilePage;
