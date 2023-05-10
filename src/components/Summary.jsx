import React from "react";

function Summary() {
  return (
    <div className="border bg-gray-500 p-5 rounded-lg w-1/2 mx-auto mt-[-50px]">
      <h2 className="text-2xl font-bold text-white text-center">
        {" "}
        Welcome to our restaurant! We offer a wide selection of delicious dishes
        made from the freshest ingredients.
      </h2>
      <p className="text-white text-center">
        {" "}
        Our menu includes everything from classic favorites like burgers and
        fries to more adventurous options like spicy Thai curries and exotic
        seafood.
      </p>
    </div>
  );
}

export default Summary;
