import { createContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [mealsInCart, setMealsInCart] = useState([]);

  const addMealInCart = (mealToAdd, qty) => {
    const isPresent = mealsInCart.find((meal) => meal.name === mealToAdd.name);
    if (isPresent) {
      const updatedCart = mealsInCart.map((meal) => {
        if (meal.name === mealToAdd.name) {
          return {
            ...meal,
            qty: qty,
          };
        }
        return meal;
      });
      console.log(updatedCart);
      setMealsInCart(updatedCart);
    } else {
      setMealsInCart([
        ...mealsInCart,
        {
          ...mealToAdd,
          qty,
        },
      ]);
    }
  };

  const removeMealFromCart = (mealToRemove, qty) => {
    const isPresent = mealsInCart.find(
      (meal) => meal.name === mealToRemove.name
    );
    if (isPresent && qty) {
      const updatedCart = mealsInCart.map((meal) => {
        if (meal.name === mealToRemove.name) {
          return {
            ...mealToRemove,
            qty: qty,
          };
        }
        return meal;
      });
      setMealsInCart(updatedCart);
    } else {
      setMealsInCart(
        mealsInCart.filter((meal) => meal.name !== mealToRemove.name)
      );
    }
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
