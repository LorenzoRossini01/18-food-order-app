import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";

import MealItem from "./MealItem.jsx";
import Error from "./UI/Error.jsx";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) return <p className="center">Loading...</p>;

  if (error) return <Error title="Something went wrong" message={error} />;
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
