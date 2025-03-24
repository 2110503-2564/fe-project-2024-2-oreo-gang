import React from "react";
import styles from "./booking.module.css"; 
import Link from 'next/link'
import LocationDate from "./locationDate";

export const BookingPage = (): JSX.Element => {
  return (
    <div className={styles.booking}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <div className={styles.bg} />

          <img className={styles.carbanner} alt="Carbanner" src="/img/carbanner.png" />

          

            <div className={styles["booking-M"]}>
              <div className={styles["text-wrapper"]}>Pickup Date :</div>
              
              
            </div>

            <div className={styles["booking-x"]}>
            <LocationDate/>
            </div>


            <div className={styles["booking-N"]}>
              <div className={styles["text-wrapper"]}>Return Date :</div>
              
            </div>

            <div className={styles["booking-D"]}>
            <LocationDate/>
            </div>

            <div className={styles["booking-B"]}>
            <button className="block rounded-md bg-sky hover:bg-green px-3 py-2 text-black shadow-sm">
              Booking
            </button>
            </div>
          

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
