import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { mealsInCart } = useContext(cartContext);

  const cartTotal = mealsInCart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  return (
    <div>
      {mealsInCart.map((meal, index) => (
        <div key={index} className="border-b p-5">
          {meal.name} - ${meal.price} X {meal.qty}
        </div>
      ))}
      <div className="flex justify-between mt-2">
        <p className="font-bold">TOTAL:</p>
        <p className="font-bold text-xl"> ${cartTotal}</p>
      </div>
    </div>
  );
}

export default Cart;
