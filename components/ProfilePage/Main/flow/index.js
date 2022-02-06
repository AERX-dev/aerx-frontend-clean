import React, {useState} from 'react';
import Image from "next/image";
import SectionHeading from "../../ItemsList/SectionHeading";
import styles from "./styles.module.css"
import IconButton from "../../IconButton"
import { SyncOutlined, MessageOutlined, HeartOutlined, TagOutlined, TagFilled, HeartFilled, MessageFilled} from '@ant-design/icons';
import { RefreshIcon, HeartIcon } from '@heroicons/react/solid'


export default function Flow() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return <div className="mt-6">
    <SectionHeading handleClick={toggleList} isOpen={isOpen}>Flow</SectionHeading>
    {isOpen && (
      <div>
        <div className={`flex justify-around mb-4 gap-8`}>
          <div className={styles.section1}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/1/forest.jpeg"
                alt="profile"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className="">
              <p className={styles.itemHead}>Scene in the Red Forest</p>
              <div className="flex justify-between p-4 gap-4">
                <IconButton icon={<TagFilled style={{color: "#B9BFD7"}}/>} text="Buy: 81æ"/>
                <IconButton icon={<RefreshIcon style={{color: "#489B50"}}/>}/>
                <IconButton icon={<MessageFilled style={{color: "#4D80D1"}}/>}/>
                <IconButton icon={<HeartFilled style={{color: "#D56277"}}/>}/>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <p className={styles.largeText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. Read more...
            </p>
            <div className="">
              <p className={styles.itemHead}>Story #2: The Last Wind</p>
              <div className="flex justify-between p-4 gap-4">
                <IconButton icon={<TagFilled style={{color: "#B9BFD7"}}/>} text="Buy: 10æ"/>
                <IconButton icon={<RefreshIcon style={{color: "#489B50"}}/>}/>
                <IconButton icon={<MessageFilled style={{color: "#4D80D1"}}/>}/>
                <IconButton icon={<HeartFilled style={{color: "#D56277"}}/>}/>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div className={styles.section1}>
              <div className={styles.imageContainer3}>
                <Image
                  src="/images/1/large_hill.png"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
              <div style={{width: "100%"}}>
                <p className={styles.itemHead}>Large green mountains, as pictured from the point of view of a bird flying on its migration south.</p>
                <div className="flex justify-between align-center p-4 gap-4">
                  <IconButton icon={<TagFilled style={{color: "#B9BFD7"}}/>} text="Buy: 81æ"/>
                  <div className="flex justify-between p-4 gap-4">
                    <IconButton icon={<RefreshIcon style={{color: "#489B50"}}/>}/>
                    <IconButton icon={<MessageFilled style={{color: "#4D80D1"}}/>}/>
                    <IconButton icon={<HeartFilled style={{color: "#D56277"}}/>}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>;
}
