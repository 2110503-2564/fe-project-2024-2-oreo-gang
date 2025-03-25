export default async function deleteCarBooking(
    token:string,
    bookingId:string
  ) {
    const response = await fetch(
      `https://proj-oreo-backend.vercel.app/api/v1/carbookings/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${token}`
        },
      }
    );
  
    if (!response.ok) {

        throw new Error("Error has occurred");
      
    }
  
    return await response.json();
  }
  