"use client";

import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { HOME_ROUTE, LOGIN_ROUTE, WARS_ROUTE } from "@/constants/routes";


export default function Home() {
  return (
    <>
      <Navigation/>
      <p>
        TODO: WILL TAKE YOU TO THE WAR PAGE FOR AUTHENTICATED
        USERS ONLY OR LOGIN PAGE FOR ANONYMOUS USERS ONLY
      </p>
      <Link href={ HOME_ROUTE }>Home</Link>
      <br/>
      <Link href={ LOGIN_ROUTE }>Login</Link>
      <br/>
      <Link href={ WARS_ROUTE }>Wars</Link>
    </>
  );
}
