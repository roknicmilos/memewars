"use client";

import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation/>
      <p>
        TODO: WILL TAKE YOU TO THE WAR PAGE FOR AUTHENTICATED USERS ONLY OR LOGIN PAGE FOR ANONYMOUS USERS ONLY
      </p>
      <Link href="">Home</Link>
      <br/>
      <Link href="login">Login</Link>
      <br/>
      <Link href="wars">Wars</Link>
    </>
  );
}
