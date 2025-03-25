import BookingCardUpdate from "@/components/BookingCardUpdate";

export default function Page( {params}:{params:{id:string}}){
    return(
        <>
            <BookingCardUpdate providerId={params.id} />
        </>
    )
}