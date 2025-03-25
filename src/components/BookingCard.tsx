"use client";

import React, { useEffect } from "react";
import styles from "./booking.module.css";
import Link from "next/link";
import LocationDate from "./locationDate";
import dayjs, { Dayjs } from "dayjs";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import getCarProvider from "@/libs/getCarProvider";
import CarCardCustom from "./CarCardCustom";
import { useState } from "react";
import createCarBooking from "@/libs/createCarBooking";

export default function BookingCard({ providerId }: { providerId: string }) {
  const { data: session } = useSession();
  const userId = session?.user._id;
  const pid = providerId;
  const pickUpDate = useRef<null | Dayjs>(null);
  const returnDate = useRef<null | Dayjs>(null);
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [cid, setCid] = useState("");

  useEffect(() => {
    const fetchProviderInfo = async () => {
      const ProviderInfo = await getCarProvider(providerId);
      setModel(ProviderInfo.data.car.model);
      setName(ProviderInfo.data.name);
      setPrice(ProviderInfo.data.car.pricePerDay);
      setImageURL(ProviderInfo.data.car.imageURL);
      setCid(ProviderInfo.data._id);
    };

    console.log(pickUpDate);
    console.log(returnDate);

    fetchProviderInfo();
  }, []);

  const handlePickup = (value: Dayjs) => {
    pickUpDate.current = value;
    console.log(pickUpDate.current);
  };

  const handleReturn = (value: Dayjs) => {
    returnDate.current = value;
    console.log(returnDate);
  };

  const makeBooking = async () => {
    try {
      if (pickUpDate.current && returnDate.current && session?.user.token) {
        const CarBookingItem = {
          providerId: providerId,
          pickUpDate: dayjs(pickUpDate.current).format("YYYY-MM-DD"),
          returnDate: dayjs(returnDate.current).format("YYYY-MM-DD"),
          token: session.user.token,
        };
        console.log("trying to book with");
        console.log(CarBookingItem);
        const response = await createCarBooking(
          CarBookingItem.providerId,
          CarBookingItem.pickUpDate,
          CarBookingItem.returnDate,
          CarBookingItem.token
        );
        alert("Booked Successfully");
      } else {
        alert("Please Input Dates");
      }
    } catch (err) {
      alert(err);
    }
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
            <button
              className="bg-white text-black-600 border text-3xl border-black border-800 font-semibold rounded hover:bg-black hover:text-white hover:border-transparent px-20 py-5"
              onClick={makeBooking}
            >
              BOOK
            </button>
          </div>
        </div>

        <CarCardCustom
          model={model}
          provider={name}
          price={price}
          imageURL={imageURL}
          carId={cid}
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
