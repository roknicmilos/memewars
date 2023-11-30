import React, { MouseEvent, ReactNode } from "react";
import styles from "./modal.module.scss";
import Image from "next/image";


interface ModalProps {
  children?: ReactNode;
  isOpened?: boolean;

  onClose(): void;
}

export function Modal({ children, isOpened, onClose }: ModalProps) {
  if (!isOpened) return null;

  function handleBackgroundClicked(event: MouseEvent<HTMLDivElement>): void {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={ styles.modalBackground } onClick={ handleBackgroundClicked }>
      <div className={ styles.modal }>
        <div className={ styles.closeButton } onClick={ onClose }>
          <Image
            className={ styles.closeButtonImage }
            src="/images/close.svg"
            width={ 40 }
            height={ 40 }
            alt="close icon"
          />
        </div>
        { children }
      </div>
    </div>
  );
}
