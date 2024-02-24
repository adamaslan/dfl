// "use client";

import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Nave } from "./NavState";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header >
<Nave>
 
   
     
   </Nave>
   {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
    </header>
  );
};

export default Nav;

