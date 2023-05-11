import { useEffect } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";

function Modal({ removeShowModal }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="relative bg-white max-h-full overflow-y-auto p-10 rounded-lg shadow-lg">
        <Cart />
        <button
          className="bg-red-500 w-16 h-10 rounded-full mt-4"
          onClick={removeShowModal}
        >
          Close
        </button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
