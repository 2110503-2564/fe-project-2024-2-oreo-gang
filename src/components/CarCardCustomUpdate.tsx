import styles from "@/components/carcard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CarCardCustomUpdate({
  model,
  provider,
  price,
  imageURL,
  carId,
  pickUpDate,
  returnDate,
}: {
  model: string;
  provider: string;
  price: string;
  imageURL: string;
  carId: string;
  pickUpDate:string;
  returnDate:string;
}) {
  return (
    <div className={styles.carCardUpdate}>
      <div className="w-full h-[70%] relative">
        <Image
          src={imageURL}
          alt={`${model} image`}
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="flex flex-row w-full h-[30%] justify-around px-5 py-2">
        <div className="w-[100%] h-full">
          <div className={styles.carCardText}>
            <div>Model : {model}</div>
            <div>Provider : {provider}</div>
            <div>PricePerDay : {price}THB</div>
            <div>Current Pick Up Date : {pickUpDate}</div>
            <div>Current Return Date : {returnDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
