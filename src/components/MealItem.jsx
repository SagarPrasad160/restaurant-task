import React from "react";

function MealItem({ meal }) {
  return (
    <div>
      <li className="border p-4 text-xl">
        <p className="font-bold">{meal.name}</p>
        <p>{meal.description}</p>
        <p className="text-red-500 font-bold">${meal.price}</p>
      </li>
    </div>
  );
}

export default MealItem;
