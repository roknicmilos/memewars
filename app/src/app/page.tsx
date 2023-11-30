import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        TODO: WILL TAKE YOU TO THE WAR PAGE FOR AUTHENTICATED USERS ONLY OR LOGIN PAGE FOR ANONYMOUS USERS ONLY
      </p>
      <Link href="login">Login</Link>
    </main>
  );
}
