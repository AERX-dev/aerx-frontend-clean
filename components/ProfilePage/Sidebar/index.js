import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import UserBio from "./UserBio";
import UserInfo from "./UserInfo";

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar} {...props}>
      {/* Site logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/aerx_logo-removebg.svg"
          alt="aerx-logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex justify-center mb-4">
        <div className={styles.profileImgContainer}>
          {/* profile image here */}
          <Image
            src="/images/1/profile3.png"
            alt="profile"
            layout="fill"
            objectFit="contain"
            className={styles.profileImg}
          />
        </div>
      </div>
      <UserBio
        displayName="Ivan Ivanov"
        userName="ivan.ivanov"
        about="I work as a doctor, but in my free time I like to make funny pictures and videos. See more details in my collection ."
      />
      <UserInfo
        balance="786,01æ"
        following="4.5K"
        followers="750K"
        likes="10K"
        reposts="875"
      />
    </aside>
  );
};

export default Sidebar;
