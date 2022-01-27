import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styles from "./styles.module.css";
import FloatingIconButtons from "./FloatingIconButtons";

const ProfilePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Main />
      </div>

      <div className={styles.iconButtonsGroupContainer}></div>
      <FloatingIconButtons />
    </div>
  );
};

export default ProfilePage;
