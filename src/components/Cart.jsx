import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { mealsInCart } = useContext(cartContext);
  return (
    <div>
      {mealsInCart.map((meal) => (
        <div key={meal.name}>
          {meal.name} - ${meal.price}
        </div>
      ))}
    </div>
  );
}

export default Cart;
