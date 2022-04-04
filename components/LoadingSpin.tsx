import React from "react";
import styles from "styles/LoadingSpin.module.css";
import { IoIosSnow } from "react-icons/io";

const LoadingSpin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.loading}>
        <IoIosSnow className={styles.loading_1} />
        <IoIosSnow className={styles.loading_2} />
        <IoIosSnow className={styles.loading_3} />
        <IoIosSnow className={styles.loading_4} />
        <IoIosSnow className={styles.loading_5} />
      </div>
    </div>
  );
};

export default LoadingSpin;
