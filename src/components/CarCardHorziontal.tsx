'use client'
import styles from "@/components/carcardhorizontal.module.css";
import Image from "next/image";
import Link from "next/link";
import deleteCarBooking from "@/libs/deleteCarBooking";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function CarCardHorizontal({
  model,
  provider,
  price,
  imageURL,
  carId,
  bookDate,
  returnDate,
  token
}: {
  model: string;
  provider: string;
  price: string;
  imageURL: string;
  carId: string;
  bookDate: string;
  returnDate: string;
  token: string
}) {

    const router = useRouter();

    const deleteUserBooking = async (token:string, bookingId:string) => {

        try{
        const deleteResponse = await deleteCarBooking(token, bookingId);
        alert("Deleted Booking Successfully")
        }catch(err){
            alert(err)
        }

    }

  return (
    <div className={styles.carCard}>
        <div className="flex flex-row justify-around h-full w-full">
            <div className="h-full w-[40%] relative">
                  <Image src={imageURL} alt={`${model} image`} className={styles.carImage} fill={true}/>
            </div>
            <div className="h-full w-[60%] flex flex-row space-x-4 space-y-3">
                <div className="w-[60%] h-full space-y-2 bg-gray-100 px-5 py-5">
                    <div className={styles.carText}>Model: {model}</div>
                    <div className={styles.carText}>Provider: {provider}</div>
                    <div className={styles.carText}>PricePerDay: {price}THB</div>
                    <div className={styles.carText}>Booked Date: {bookDate}</div>
                    <div className={styles.carText}>Return Date: {returnDate}</div>
                </div>
                <div className="w-[40%] h-full px-10 py-5 space-y-10">
                <Link href={`/Viewbooking/update/${carId}`}>
                <button className="bg-white text-black-600 border text-2xl border-black border-800 font-semibold hover:bg-black hover:text-white hover:border-transparent px-10 py-5 rounded-2xl">
                     UPDATE
                </button>
                </Link>

                <button className="bg-white text-black-600 border text-2xl border-black border-800 font-semibold hover:bg-black hover:text-white hover:border-transparent px-10 py-5 rounded-2xl"
                onClick={(e)=>{e.preventDefault(); deleteUserBooking(token, carId); router.refresh();}} >
                     DELETE
                </button>

                </div>
            </div>
        </div>
    </div>
  );
}
