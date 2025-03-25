"use client";

import React from "react";
import styles from "./booking.module.css";
import Link from "next/link";
import LocationDate from "./locationDate";
import dayjs, { Dayjs } from "dayjs";
import { useRef } from "react";
import { useSession } from "next-auth/react";

export default function BookingPage({ providerId }: { providerId: string }) {
  const makeBooking = () => {};

  const { data: session } = useSession();
  const userId = session?.user._id;
  const pid = providerId;
  const pickUpDate = useRef<null | Dayjs>(null);
  const returnDate = useRef<null | Dayjs>(null);

  const handlePickup = (value: Dayjs) => {
    pickUpDate.current = value;
    console.log(pickUpDate.current);
  };

  const handleReturn = (value: Dayjs) => {
    returnDate.current = value;
    console.log(returnDate);
  };

  return session ? (
    <div className={styles.booking}>
      <div className="flex flex-row justify-around my-20 mx-20 px-20 py-20">
        <div className="w-[30%]">
          <div className="px-10 py-5 space-y-2">
            <div className={styles.bookingDatePicker}>Pickup Date :</div>
            <LocationDate onDateChange={handlePickup} />
          </div>
          <div className="px-10 py-5 space-y-2">
            <div className={styles.bookingDatePicker}>Return Date :</div>
            <LocationDate onDateChange={handleReturn} />
          </div>
          <div className="px-10 mx-3 py-10 space-y-4">
            <button className="bg-white text-black-600 border text-3xl border-black border-800 font-semibold rounded hover:bg-black hover:text-white hover:border-transparent px-20 py-5">
              BOOK
            </button>
          </div>
        </div>

        <img
          className={styles.carBanner}
          alt="Carbanner"
          src="/img/carbanner.png"
        />
      </div>
    </div>
  ) : (
    <div className={styles.booking}>
      <div className="flex flex-row justify-center mx-20 my-20">
        <div className="text-3xl text-black">You Are Not Logged In</div>
      </div>
      <div className="flex flex-row justify-center mx-20 my-20">
        <div className="text-3xl text-black">Please Login to Book Cars</div>
      </div>
    </div>
  );
}
