// LeftBanner.js
import React from "react";
import styles from "./leftBanner.module.css";

function LeftBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerText}>
        <p>Discover new things on Superapp</p>
      </div>
    </div>
  );
}

export default LeftBanner;
