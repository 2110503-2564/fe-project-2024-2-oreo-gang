'use server'

import { useSession } from "next-auth/react"
import getCarBookings from "@/libs/getCarBookings";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import CarCardHorizontal from "./CarCardHorziontal";

export default async function BookingList(){
    const serverSession = await getServerSession(authOptions);
    const token = serverSession?.user.token;
    if(token){
        console.log(serverSession)
        const carBookingListJson = await getCarBookings(token);
        const carBookingListJsonReady:CarBookingJson = carBookingListJson.data;

        console.log(carBookingListJsonReady);
        

//<CarCardHorizontal model="Bloodfiend v2" provider="DonQuixoteCars" price="100" imageURL="https://drive.google.com/uc?id=1PIdnf8bouy3KaQLeM62r1Zc-mQY9Z0On" carId="123"/>

        return(
            <div className="px-5 py-5 space-y-5">
            {
                carBookingListJson.data.length==0?
                <div className="my-20 text-3xl font-bold">
                No Cars Booked.
                </div>
                :
                carBookingListJson.data.map( (carBookingItem:CarBookingItem) => (
                    <CarCardHorizontal model={carBookingItem.provider.car.model} provider={carBookingItem.provider.name} price={carBookingItem.provider.car.pricePerDay} imageURL={carBookingItem.provider.car.imageURL} carId={carBookingItem._id} 
                    bookDate={carBookingItem.pickupDate} returnDate={carBookingItem.returnDate} token={token}/>
                ))
            }
            
            </div>
        )
    }
    return(
        <div className="my-20 text-3xl font-bold">
            You are Not Logged In.
        </div>
    )
}