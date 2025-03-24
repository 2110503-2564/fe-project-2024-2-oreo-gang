import React from "react";
import styles from "./category.module.css";
import Link from "next/link";

export const Category = (): JSX.Element => {
  return (
    <div className={styles.category}>
      <div className={styles.div}>
        <div className={styles.end}>
          <div className={styles.group}>
            <div className={styles["overlap-group"]}>
              <div className={styles.rectangle} />

              <div className={styles.frame}>
                <div className={styles["frame-2"]}>
                  <div className={styles["text-wrapper"]}>OREO.CO</div>

                  <div className={styles["frame-3"]} />
                </div>
              </div>

              <p className={styles["element-all-rights"]}>
                OREO.co © 2000-2023, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <Link href="/Booking">
        <div className="shadow-lg">
        <div className={styles.nissan}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-2"]}>Price : $180</div>

            <div className={styles["text-wrapper-3"]}>
              Provider : PrimeDrive Rentals
            </div>

            <p className={styles["text-wrapper-4"]}>Model : Nissan Sentra SR</p>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Image" src="/img/Nissan Sentra SR.jpg" />
            </div>
          </div>
        </div>
        </div>
        </Link>


        <Link href="/Booking">
        <div className={styles["BMW-series"]}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-5"]}>Price : $150</div>

            <div className={styles["text-wrapper-3"]}>
              Provider : VividVoyage Rentals
            </div>

            <p className={styles["text-wrapper-4"]}>Model : BMW 3 Series</p>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Bmw series" src="/img/BMW 3 Series.jpg" />
            </div>
          </div>
        </div></Link>


        <Link href="/Booking">
        <div className={styles.benz}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-2"]}>Price : $200</div>

            <div className={styles["text-wrapper-3"]}>
              Provider : RideEasy Rentals
            </div>

            <div className={styles["text-wrapper-4"]}>
              Model : Mercedes-Benz G-Class
            </div>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Image" src="/img/Mercedes-Benz G-Class.jpg" />
            </div>
          </div>
        </div></Link>


        <Link href="/Booking">
        <div className={styles.porsche}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-2"]}>Price : $180</div>

            <div className={styles["text-wrapper-3"]}>
              Provider : CruiseOn Wheels
            </div>

            <div className={styles["text-wrapper-4"]}>Model : Porsche 911</div>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Image" src="/img/911.jpg" />
            </div>
          </div>
        </div></Link>



        <Link href="/Booking">
        <div className={styles.audi}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-5"]}>Price : $150</div>

            <p className={styles["text-wrapper-3"]}>
              Provider : SwiftDrive Car Hire
            </p>

            <div className={styles["text-wrapper-4"]}>Model : Audi A4</div>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Image" src="/img/Audi A4.jpg" />
            </div>
          </div>
        </div></Link>




        <Link href="/Booking">

        <div className={styles.r}>
          <div className={styles.overlap}>
            <div className={styles["text-wrapper-2"]}>Price : $200</div>

            <div className={styles["text-wrapper-3"]}>
              Provider : ZoomCar Rentals
            </div>

            <p className={styles["text-wrapper-4"]}>Model : Nissan GTR R35</p>

            <div className={styles["img-wrapper"]}>
              <img className={styles.img} alt="Image" src="/img/r35.jpg" />
            </div>
          </div>
        </div>
        </Link>

      </div>
    </div>
  );
};
