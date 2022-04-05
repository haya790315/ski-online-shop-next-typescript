import React from "react";
import styles from "styles/LoadingSpin.module.css";
import { IoIosSnow } from "react-icons/io";

const LoadingSpin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background_circle}></div>
      <div className={styles.container_snow}>
        <IoIosSnow className={styles.snow_animate_1} />
        <IoIosSnow className={styles.snow_animate_2} />
        <IoIosSnow className={styles.snow_animate_3} />
        <IoIosSnow className={styles.snow_animate_4} />
        <IoIosSnow className={styles.snow_animate_5} />
      </div>
    </div>
  );
};

export default LoadingSpin;
