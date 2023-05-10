import { useContext, useState } from "react";

import cartContext from "../context/cartContext";

import { GoDash } from "react-icons/go";

function MealItem({ meal }) {
  const { addMealInCart, removeMealFromCart } = useContext(cartContext);

  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty(qty + 1);
    addMealInCart(meal, qty + 1);
  };

  const handleRemove = () => {
    if (qty >= 1) {
      setQty(qty - 1);
      removeMealFromCart(meal, qty - 1);
    }
  };

  return (
    <div>
      <li className="border p-4 text-xl flex justify-between">
        <div>
          <p className="font-bold">{meal.name}</p>
          <p>{meal.description}</p>
          <p className="text-red-500 font-bold">${meal.price}</p>
        </div>
        <div className="flex">
          <span>Qty</span>
          <span className="ml-2 inline-block h-8 w-8 border text-center font-bold leading-8 rounded mr-2">
            {qty}
          </span>
          {qty >= 1 && (
            <span
              className="ml-2  inline-block h-8 w-8 border text-center font-bold leading-8 rounded mr-2 cursor-pointer"
              onClick={handleRemove}
            >
              <GoDash className="m-1" />
            </span>
          )}

          <button
            className="rounded-lg h-12 w-16 bg-red-500 hover:bg-red-600 active:transform active:scale-90 text-white"
            onClick={handleAdd}
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
