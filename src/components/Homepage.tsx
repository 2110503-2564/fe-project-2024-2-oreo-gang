import React from "react";

import styles from "./homepage.module.css";
import Link from 'next/link'

export const Homepage = (): JSX.Element => {
  return (
    <div className={styles.homepage}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <div className={styles.bg} />

          <img className={styles.carbanner} alt="Carbanner" src="/img/carbanner.png" />

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

          <div className={styles.group}>
            <div className={styles["overlap-group-wrapper"]}>
              <div className={styles["overlap-group"]}>
                <div className={styles.rectangle} />

                <div className={styles.frame}>
                  <div className={styles["frame-2"]}>
                    <div className={styles["text-wrapper-2"]}>OREO.CO</div>

                    <div className={styles["frame-3"]} />
                  </div>
                </div>

                <p className={styles["element-all-rights"]}>
                  OREO.co © 2025, All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
