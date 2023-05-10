import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { mealsInCart } = useContext(cartContext);

  const cartTotal = mealsInCart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  return (
    <div>
      {mealsInCart.map((meal) => (
        <div key={meal.name}>
          {meal.name} - ${meal.price} X {meal.qty}
        </div>
      ))}
      <div>TOTAL: ${cartTotal}</div>
    </div>
  );
}

export default Cart;
