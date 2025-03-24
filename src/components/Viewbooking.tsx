import React from "react";

import styles from "./viewbooking.module.css";

export default function View() {
  return (
    <div className={styles.view}>
      <div className={styles["text-wrapper-2"]}>View Booking</div>
      <img className={styles.image} alt="Image" src="/img/view.jpg" />
    </div>
  );
}
