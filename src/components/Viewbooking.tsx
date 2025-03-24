import React from "react";

import styles from "./viewbooking.module.css";

export const View = (): JSX.Element => {
  return (
    <div className={styles.view}>
      <div className={styles["overlap-wrapper"]}>
        <div className={styles.overlap}>
          <div className={styles.bg} />

          <div className={styles["profile-banner"]}>
            <img className={styles.image} alt="Image" src="/img/view.jpg" />
          </div>

          <div className={styles.end}>
            <div className={styles.group}>
              <div className={styles["overlap-group"]}>
                <div className={styles.rectangle} />

                <div className={styles.frame}>
                  <div className={styles.div}>
                    <div className={styles["text-wrapper"]}>OREO.CO</div>

                    <div className={styles["frame-2"]} />
                  </div>
                </div>

                <p className={styles["element-all-rights"]}>
                  OREO.co © 2000-2023, All Rights Reserved
                </p>
              </div>
            </div>
          </div>

          <div className={styles["text-wrapper-2"]}>View Booking</div>
        </div>
      </div>
    </div>
  );
};