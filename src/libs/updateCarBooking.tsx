export default async function updateCarBooking(
  pickUpDate: string,
  returnDate: string,
  id: string,
  token: string
) {
  const response = await fetch(
    `https://proj-oreo-backend.vercel.app/api/v1/carbookings/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pickupDate: pickUpDate,
        returnDate: returnDate,
      }),
    }
  );

  if (!response.ok) {
    if (response.status == 405) {
      throw new Error("The pickup date is the same or after the return date");
    } else {
      throw new Error("Error has occurred");
    }
  }

  return await response.json();
}
