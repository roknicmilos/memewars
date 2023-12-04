"use client";

import React, { useEffect, useState } from "react";
import { User } from "@/api/models/User";
import { useRouter, useSearchParams } from "next/navigation";
import { HOME_ROUTE, WARS_ROUTE } from "@/constants/routes";
import { UserService } from "@/api/services/UserService";
import { Navigation } from "@/components/navigation/Navigation";
import Link from "next/link";


export default function LoginSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [ user, setUser ] = useState<User>(UserService.getUserFromLocalStorage);

  useEffect(() => {
    if (user) {
      router.push(HOME_ROUTE);
    } else {
      const authenticatedUser = UserService.mapURLQueryParamsToUser(searchParams);
      UserService.saveUserToLocalStorage(authenticatedUser);
      setUser(authenticatedUser);
    }
  }, [ user, router, searchParams ]);

  if (!user) return null;

  return (
    <>
      <Navigation/>
      <div>LOGGED IN!</div>
      <Link href={ WARS_ROUTE }>Wars</Link>
    </>
  );
}
