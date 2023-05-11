import { useState } from "react";

import Header from "./components/Header";
import Summary from "./components/Summary";
import MealsList from "./components/MealsList";
import Modal from "./components/Modal";

import { CartProvider } from "./context/cartContext";

const meals = [
  {
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato",
    price: 8.99,
  },
  {
    name: "Grilled Chicken Salad",
    description: "Mixed greens, grilled chicken, cherry tomatoes",
    price: 10.99,
  },
  {
    name: "Margherita Pizza",
    description: "Mozzarella cheese, basil, tomato sauce",
    price: 12.99,
  },
  {
    name: "Beef Stir Fry",
    description: "Sliced beef, vegetables, soy sauce",
    price: 11.99,
  },
  {
    name: "Vegetarian Pasta",
    description: "Penne pasta, mixed vegetables, tomato sauce",
    price: 9.99,
  },
  {
    name: "Fish and Chips",
    description: "Beer-battered cod, fries",
    price: 13.99,
  },
  {
    name: "Spaghetti",
    price: 12.99,
    description: "Classic spaghetti with marinara sauce",
  },
  {
    name: "Chicken Caesar Salad",
    price: 9.99,
    description: "Romaine lettuce, grilled chicken, and Caesar dressing",
  },
  {
    name: "Margherita Pizza",
    price: 14.99,
    description: "Fresh tomato sauce, mozzarella, and basil",
  },
  {
    name: "Grilled Salmon",
    price: 18.99,
    description: "Fresh salmon fillet with lemon butter sauce",
  },
  {
    name: "Hamburger",
    price: 8.99,
    description: "Beef patty, lettuce, tomato, and onion on a bun",
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const removeShowModal = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      <div>
        {showModal && <Modal removeShowModal={removeShowModal} />}
        <Header handleShowModal={handleShowModal} />
        <Summary />
        <MealsList meals={meals} />
      </div>
    </CartProvider>
  );
}

export default App;
