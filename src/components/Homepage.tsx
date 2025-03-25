"use client"

import React from "react";
import styles from "./homepage.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Homepage() {

  const {data:session} = useSession();
  console.log(session)

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

          <div className="mx-20 mt-20 px-20 py-20" style={{position:"absolute"}}>
            <div className={styles["CARRENTAL-OREO"]}>
              CARRENTAL
              <br/>
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
    </div>
  );
}
