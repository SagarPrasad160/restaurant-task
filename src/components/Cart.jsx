import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { mealsInCart } = useContext(cartContext);

  const cartTotal = mealsInCart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  if (mealsInCart.length === 0) {
    return <p>Your cart is currently empty.</p>;
  }

  return (
    <div>
      {mealsInCart.map((meal, index) => (
        <div key={index} className="border-b p-5">
          {meal.name} - ${meal.price} X {meal.qty}
        </div>
      ))}
      <div className="flex justify-between mt-2 font-bold text-xl">
        <p>TOTAL:</p>
        <p> ${Number(cartTotal).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
