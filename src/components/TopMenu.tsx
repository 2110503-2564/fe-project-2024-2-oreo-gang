import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';


export default async function TopMenu (){

    const session = await getServerSession(authOptions)
    if(session)console.log(session.user);


    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg}
                alt='logo' width={0} height={0} sizes="100vh"/>
              

            {
                session?
                <Link href="/api/auth/signout"><div className="flex items-center absolute right-10 h-full px-2 text-black-600 text-sm">Sign-Out</div> </Link>:
                <Link href="/api/auth/signin"><div className="flex items-center absolute right-10 h-full px-2 text-black-600 text-sm">Sign-In</div></Link>
            }

             <Link href="/Viewbooking"><div className="flex items-center absolute left-450 h-full px-2 text-black-600 text-sm ">My Booking</div></Link>

        </div>
    );
}