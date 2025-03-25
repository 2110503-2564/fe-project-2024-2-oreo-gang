import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  if (session) console.log(session.user);

  return (
    <div className={styles.menucontainer}>
      <Link href="/">
        <Image
          src={"/img/logo.png"}
          className={styles.logoimg}
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>

      {session ? (
        <div className="flex flex-row absolute right-0 mx-5 my-6">
            <div className=" h-full px-2 text-black-800 font-extrabold mx-5 text-sm">
              Hello, {session.user.name}
            </div>
          <Link href="/api/auth/signout">
            <div className=" h-full px-2 text-black-600 text-sm">
              Sign-Out
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row-reverse absolute right-0 mx-5 my-6">
          <Link href="/api/auth/register">
            <div className="h-full px-5 text-black-600 text-sm">Register</div>
          </Link>
          <Link href="/api/auth/signin">
            <div className="h-full px-5 text-black-600 text-sm">Sign-In</div>
          </Link>
        </div>
      )}

      <Link href="/Viewbooking">
        <div className="flex items-center absolute left-450 h-full px-2 text-black-600 text-sm ">
          My Booking
        </div>
      </Link>
    </div>
  );
}
