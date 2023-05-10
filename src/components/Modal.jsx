import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">This is a modal.</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;