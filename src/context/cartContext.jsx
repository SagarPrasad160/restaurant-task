import { createContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [mealsInCart, setMealsInCart] = useState([]);

  const addMealInCart = (meal) => {
    setMealsInCart([...mealsInCart, meal]);
  };

  const removeMealFromCart = (mealToRemove) => {
    setMealsInCart(
      mealsInCart.filter((meal) => meal.name !== mealToRemove.name)
    );
  };

  return (
    <cartContext.Provider
      value={{
        mealsInCart,
        addMealInCart,
        removeMealFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
