import React from "react";

import MealItem from "./MealItem";

function MealsList({ meals }) {
  return (
    <div className="w-2/3 mx-auto mt-5 rounded-lg border shadow">
      <ul>
        {meals.map((meal) => (
          <MealItem meal={meal} key={meal.name} />
        ))}
      </ul>
    </div>
  );
}

export default MealsList;
