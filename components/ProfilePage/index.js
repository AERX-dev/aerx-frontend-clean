import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styles from "./styles.module.css";
import IconButtonsGroup from "../UI/IconButtonsGroup";
import IconButton from "../UI/IconButton";
import { FcSearch, FcPlus } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Main />
      </div>

      <div className={styles.iconButtonsGroupContainer}>
        <IconButtonsGroup>
          <IconButton>
            <FcSearch />
          </IconButton>
          <IconButton>
            <FaPlus />
          </IconButton>
        </IconButtonsGroup>
      </div>
    </div>
  );
};

export default ProfilePage;
