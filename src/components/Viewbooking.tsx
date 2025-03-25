import React from "react";

import styles from "./viewbooking.module.css";
import BookingList from "./BookingList";

export default function View() {
  return (
    <div className={styles.view}>
      <div className={styles["text-wrapper-2"]}>Booking List</div>
      <BookingList/>
      <img className={styles.image} alt="Image" src="/img/view.jpg" />
      <div className={styles.bottom}/>
    </div>
  );
}
