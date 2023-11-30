import React from "react";
import styles from "./navigation.module.scss";
import Image from "next/image";
import { UserMenu } from "@/components/navigation/user-menu/UserMenu";


export function Navigation() {
  return (
    <nav className={ styles.navigation }>
      <div className={ styles.container }>
        <a className={ styles.homeButton } href={ "/" }>
          <Image
            src="/images/burger.svg"
            width={ 50 }
            height={ 50 }
            alt="burger svg"
          />
        </a>
        <UserMenu/>
      </div>
    </nav>
  );
}
