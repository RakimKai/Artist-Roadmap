import ReactDOM from "react-dom";

import Button from "./Button";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black/50 z-50" />
      <div className="fixed text-xl p-12  hover:bg-spotifyHover transition-all duration-150 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-sm bg-spotifyContainer ">
        {children}
        <div className="flex text-black justify-center mt-4">
          <Button text="Close" handleClick={onClose} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
