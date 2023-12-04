import React, { useState } from "react";
import styles from "./user-menu.module.scss";
import { Modal } from "@/components/modal/Modal";
import Image from "next/image";
import { User } from "@/api/models/User";
import { UserService } from "@/api/services/UserService";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constants/routes";


export function UserMenu() {
  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  const [ user, setUser ] = useState<User | null>(UserService.getUserFromLocalStorage);

  const logout = () => {
    UserService.deleteUserFromLocalStorage();
    setUser(null);
  };

  return (
    <>
      <div className={ styles.avatarButton } onClick={ () => setIsOpened(true) }>
        <Image
          className={ styles.avatarButtonImage }
          width={ 40 }
          height={ 40 }
          src={ user ? user.imageURL : "/images/avatar.svg" }
          alt="avatar icon"
        />
      </div>
      <Modal isOpened={ isOpened } onClose={ () => setIsOpened(false) }>
        { user ? (
          <>
            <div className={ styles.modalText }>
              <p>Had enough?</p>
              <p>
                Go scroll some Instagram or Facebook a bit so that you can remind
                yourself that this is a much better waist of your time...
              </p>
            </div>
            <div className={ styles.button } onClick={ logout }>Logout</div>
          </>
        ) : (
          <Link className={ styles.button } href={ LOGIN_ROUTE }>Login</Link>
        ) }
      </Modal>
    </>
  );
}
