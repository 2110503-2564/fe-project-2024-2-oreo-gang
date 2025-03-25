import getCarProvider from "@/libs/getCarProvider"

export default async function Page({params}:{params : {id:string}}){

    const carProvider = await getCarProvider(params.id)

    return( 
        <div className="flex flex-col justify-around my-10 mx-10"> 
            <div>{carProvider.data.name}</div>

            <div>{carProvider.data.car.model}</div>
        </div>
    )
}