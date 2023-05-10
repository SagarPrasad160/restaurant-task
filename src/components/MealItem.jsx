import { useContext } from "react";

import cartContext from "../context/cartContext";

function MealItem({ meal }) {
  const { addMealInCart } = useContext(cartContext);
  return (
    <div>
      <li className="border p-4 text-xl flex justify-between">
        <div>
          <p className="font-bold">{meal.name}</p>
          <p>{meal.description}</p>
          <p className="text-red-500 font-bold">${meal.price}</p>
        </div>
        <div>
          <span>Amount</span>
          <span className="ml-2 inline-block h-8 w-8 border text-center font-bold leading-8 rounded mr-2">
            1
          </span>
          <button
            className="rounded-lg h-12 w-16 bg-red-500 hover:bg-red-600 active:transform active:scale-90 text-white"
            onClick={() => addMealInCart(meal)}
          >
            +Add
          </button>
          {/* Replace '1' with a variable or state value for dynamic quantity */}
        </div>
      </li>
    </div>
  );
}

export default MealItem;
