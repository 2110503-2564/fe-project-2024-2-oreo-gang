'use client'

import BookingCard from "@/components/BookingCard";

export default function Page({params}:{params : {id:string}}){


  return (
    <main>
      <BookingCard providerId={params.id}/>
    </main> 
  );
}