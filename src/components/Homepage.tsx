import React from "react";

import styles from "./homepage.module.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <div className={styles.bg} />

          <img
            className={styles.carbanner}
            alt="Carbanner"
            src="/img/carbanner.png"
          />

          <div className={styles["CARRENTAL-OREO"]}>
            CARRENTAL
            <br />
            OREO
          </div>

          <Link href="/Category">
            <div className={styles.booking}>
              <div className={styles["text-wrapper"]}>Booking Now</div>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}
