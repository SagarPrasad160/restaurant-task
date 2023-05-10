import React from "react";

import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const styles = {
    background:
      "url(https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM3MDYwMTY&ixlib=rb-4.0.3&q=85)",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",
  };

  return (
    <div style={styles} className="h-48">
      <header className="bg-red-600 h-14 flex justify-evenly p-2">
        <h1 className="text-white font-bold text-2xl">ReactMeals</h1>
        <div className="flex p-1 h-10 rounded-full w-48 bg-gray-500 bg-opacity-80 justify-center items-center">
          <FaShoppingCart className="mr-1 text-white" />
          <span className="text-white font-semibold">Your Cart</span>
          <span className="p-2 flex items-center bg-red-600 rounded text-white font-bold text-2xl h-6 m-2">
            0
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
