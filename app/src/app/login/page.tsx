"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { Navigation } from "@/components/navigation/Navigation";
import { AuthService } from "@/api/services/AuthService";


export default function Login() {
  return (
    <>
      <Navigation/>
      <div className={ styles.container }>
        <>
          <h1 className={ styles.title }>Welcome to the Meme Wars</h1>
          <div className={ styles.buttons }>
            <div
              className={ styles.button }
              onClick={ () => window.location.href = AuthService.getLoginURL() }
            >
              <Image
                className={ styles.darkGoogleIcon }
                width={ 30 }
                height={ 30 }
                src="/images/googleDark.svg"
                alt="dark google icon"
              />
              <Image
                className={ styles.whiteGoogleIcon }
                width={ 30 }
                height={ 30 }
                src="/images/googleWhite.svg"
                alt="white google icon"
              />
              <span className={ styles.buttonLabel }>Login with Google</span>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
