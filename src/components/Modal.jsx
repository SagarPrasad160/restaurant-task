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
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-60 p-10  bg-white">
        {" "}
        <Cart />
        <button
          className="bg-red-500 w-16 h-10 rounded-full"
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
