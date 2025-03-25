export default async function getCarBookings(
    token:string
  ) {
    const response = await fetch(
      "https://proj-oreo-backend.vercel.app/api/v1/carbookings/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${token}`
        },
      }
    );
    if (!response.ok) {
        if(response.status==404){
            const notFound = {
                msg:'no booking',
                noBooking:true
            }
            return await notFound;
        }else{
        throw new Error("Error has occurred");
        }
    }
    
    return await response.json();
  }
  