import React from "react";
import styles from "./Modal.module.css";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div>{children}</div>
        <button
          onClick={onClose}
          className={styles.closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );
}