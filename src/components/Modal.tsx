import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className={`relative ${modalStyles}`}>
        <button
          className={`absolute top-2 right-2 ${closeBtnStyles}`}
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
