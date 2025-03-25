import styles from "@/components/carcard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CarCard({
  model,
  provider,
  price,
  imageURL,
  carId,
}: {
  model: string;
  provider: string;
  price: string;
  imageURL: string;
  carId: string;
}) {
  return (
    <div className={styles.carCard}>
      <div className="w-full h-[70%] relative">
        <Image
          src={imageURL}
          alt={`${model} image`}
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="flex flex-row w-full h-[30%] justify-around px-5 py-5">
        <div className="w-[60%] h-full">
          <div className={styles.carCardText}>
            <div>Model : {model}</div>
            <div>Provider : {provider}</div>
            <div>PricePerDay : {price}THB</div>
          </div>
        </div>
        <div className="w-[40%] h-full">
        <Link href={`/Category/${carId}`}>
          <button className="bg-white text-black-600 border border-black border-800 font-semibold rounded hover:bg-black hover:text-white hover:border-transparent mx-10 my-10 px-8 py-5">
            BOOK
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
