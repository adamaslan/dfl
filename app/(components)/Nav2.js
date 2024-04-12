// "use client";

import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Nave } from "./NavState";
import styles from '../styles/LinkStyles.module.css' // Import the CSS module


const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <div >
<Nave>
 

     
   </Nave>
   {session ? (
            <Link href="/api/auth/signout?callbackUrl=/" className={styles.styledLink}>Logout</Link>
          ) : (
            <Link href="/api/auth/signin" className={styles.styledLink}>Login</Link>
          )}
    </div>
  );
};

export default Nav;
