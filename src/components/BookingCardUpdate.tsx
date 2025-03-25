'use client'

import React, { useEffect } from "react";
import styles from "./booking.module.css";
import Link from "next/link";
import LocationDate from "./locationDate";
import dayjs, { Dayjs } from "dayjs";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import getCarProvider from "@/libs/getCarProvider";
import CarCardCustomUpdate from "./CarCardCustomUpdate";
import { useState } from "react";
import createCarBooking from "@/libs/createCarBooking";
import updateCarBooking from "@/libs/updateCarBooking";
import getCarBooking from "@/libs/getCarBooking";
import { useRouter } from "next/navigation";

export default function BookingCardUpdate({providerId}:{providerId:string}){



  const {data:session} = useSession();
  if(session){
  const router = useRouter();
  const userId = session.user._id
  const token = session.user.token
  const pid = providerId;
  const pickUpDate = useRef<null|Dayjs>(null);
  const returnDate = useRef<null|Dayjs>(null);
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [cid, setCid] = useState("")
  const [ currPickUpDate , setCurrPickUpDate ] = useState("")
  const [ currReturnDate , setCurrReturnDate ] = useState("")
  const [ dummyState , setDummyState ] = useState(0);

  useEffect( () => {

    const fetchProviderInfo = async () => {
      const ProviderInfo = await getCarBooking(providerId,token);
      setModel(ProviderInfo.data.provider.car.model)
      setName(ProviderInfo.data.provider.name)
      setPrice(ProviderInfo.data.provider.car.pricePerDay)
      setImageURL(ProviderInfo.data.provider.car.imageURL)
      setCurrPickUpDate(ProviderInfo.data.pickupDate)
      setCurrReturnDate(ProviderInfo.data.returnDate)
      setCid(ProviderInfo.data._id)
    }

    fetchProviderInfo();

  },[])

  const handlePickup = (value:Dayjs) => {
    pickUpDate.current = value;
    console.log(pickUpDate.current)
  }

  const handleReturn = (value:Dayjs) => {
    returnDate.current = value;
    console.log(returnDate)
  }

  const makeBooking = async () => {
    try{
      if(pickUpDate.current&&returnDate.current&&session?.user.token){
        const CarBookingItem = {
          pickUpDate: dayjs(pickUpDate.current).format("YYYY-MM-DD"),
          returnDate: dayjs(returnDate.current).format("YYYY-MM-DD"),
          token : session.user.token
        }
        console.log("trying to book with")
        console.log(CarBookingItem)
        const response = await updateCarBooking (  CarBookingItem.pickUpDate, CarBookingItem.returnDate, providerId, CarBookingItem.token);
        router.refresh();
        alert("Updated Booking Successfully")
        setCurrPickUpDate(CarBookingItem.pickUpDate)
        setCurrReturnDate(CarBookingItem.returnDate)
        
      }else{
        alert("Please Input Dates")
      }
    }catch(err){
      alert(err);
    }
  }


  return (
    <div className={styles.booking}>
      <div className="flex flex-row justify-around my-20 mx-20 px-20 py-20">

        <div className="w-[30%]">
          <div className="px-10 py-5 space-y-2">
            <div className={styles.bookingDatePicker}>Pickup Date :</div>
            <LocationDate onDateChange={handlePickup}/>
          </div>
          <div className="px-10 py-5 space-y-2">
            <div className={styles.bookingDatePicker}>Return Date :</div>
            <LocationDate onDateChange={handleReturn} />
          </div>
          <div className="px-10 mx-3 py-10 space-y-4">
          <button className="bg-white text-black-600 border text-3xl border-black border-800 font-semibold rounded hover:bg-black hover:text-white hover:border-transparent px-10 py-5"
          onClick={makeBooking}>
            UPDATE
          </button>
          </div>

        </div>

        <CarCardCustomUpdate model={model} provider={name} price={price} imageURL={imageURL} carId={cid} pickUpDate={currPickUpDate} returnDate={currReturnDate}/>

       
      </div>
    </div>
  )}else{
    return(
      <div className={styles.booking}>
        <div className="flex justify-center mx-20 my-20 text-3xl text-black">

          <div>Not Logged In.</div>

        </div>
      </div>
    )
  }
}
