import { Provider } from "react-redux";
import CarCard from "./CarCard"
import Link from "next/link";

export default async function CarCatalogue( {ProviderJson} : {ProviderJson:Promise<ProviderJson>}){

    const ProviderJsonReady = await ProviderJson;

    return(
    <div className="flex flex-row mx-20 my-20 space-x-40 justify-center">
        {
            ProviderJsonReady.data.map( (ProviderItem) => (
                <div
                key={ProviderItem._id}
                >
                     <CarCard model={ProviderItem.car.model} provider={ProviderItem.name} price={ProviderItem.car.pricePerDay} imageURL={ProviderItem.car.imageURL} carId={ProviderItem._id}/>
                </div>
            ))
        }
    </div>
    )
}