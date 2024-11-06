import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "./icons/CloseIcon";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  modalStyles?: string;
  closeBtnStyles?: string;
}

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  modalStyles = "",
  closeBtnStyles = "",
}) => {
  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      id="backdrop"
      className="fixed inset-0  items-center justify-center  z-50"
    >
      <div id="modalContainer" className={`relative ${modalStyles}`}>
        <div className="w-full mb-5 flex justify-end pr-4">
          <button className={closeBtnStyles} onClick={onClose}>
            <CloseIcon svgStyles="size-6 stroke-2 stroke-lt-text-main hover:stroke-accent-color focus:stroke-accent-color dark:stroke-dt-text-main dark:hover:stroke-accent-color dark:focus:stroke-accent-color" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
