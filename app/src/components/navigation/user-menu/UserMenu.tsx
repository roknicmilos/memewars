import React, { useState } from "react";
import styles from "./user-menu.module.scss";
import { Modal } from "@/components/modal/Modal";
import Image from "next/image";

export function UserMenu() {
  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  return (
    <>
      <div className={ styles.avatarButton } onClick={ () => setIsOpened(true) }>
        <Image
          className={ styles.profileImage }
          width={ 40 }
          height={ 40 }
          src="/images/avatar.svg"
          alt="avatar icon"
        />
      </div>
      <Modal isOpened={ isOpened } onClose={ () => setIsOpened(false) }>
        <div className={ styles.modalText }>
          <p>Had enough?</p>
          <p>
            Go scroll some Instagram or Facebook a bit so that you can remind
            yourself that this is a much better waist of your time...
          </p>
        </div>
        <div className={ styles.button } onClick={ () => alert("TODO: logout") }>Logout</div>
      </Modal>
    </>
  );
}
