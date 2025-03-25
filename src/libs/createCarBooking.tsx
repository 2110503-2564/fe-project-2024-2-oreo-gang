export default async function createCarBooking(
    providerId:string,
    pickUpDate:string,
    returnDate:string,
    token:string
  ) {
    const response = await fetch(
      "https://proj-oreo-backend.vercel.app/api/v1/carbookings/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${token}`
        },
        body: JSON.stringify({
            providerId:providerId,
            pickupDate:pickUpDate,
            returnDate:returnDate
        }),
      }
    );
  
    if (!response.ok) {
      if(response.status == 406){
        throw new Error("User has already made 3 bookings")
      }else if( response.status == 405){
        throw new Error("The pickup date is the same or after the return date")
      }else{
        throw new Error("Error has occurred");
      }
    }
  
    return await response.json();
  }
  