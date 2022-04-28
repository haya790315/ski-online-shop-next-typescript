import React from "react";
import styles from "styles/DarkModeSwitcher.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

interface IDarkMode {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSwitcher = ({ darkMode, setDarkMode }:IDarkMode) => {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className={styles.container}>
        <span style={{ color: darkMode ? "grey" : "#FFFB18", fontSize: "24px" }}>
          <BiSun />
        </span>
        <div className={styles.switch_checkbox}>
          <label className={styles.switch}>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className={styles.slider}> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "black" }}>
          <BsMoonStarsFill />
        </span>
      </div>
    </div>
  );
};

export default DarkModeSwitcher;
