import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../utils/formatting.js";
import Button from "./UI/Button.jsx";

const MealItem = ({ meal }) => {
  const imgUrl = `http://localhost:3000/${meal.image}`;
  const priceFormatted = currencyFormatter.format(meal.price);

  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={imgUrl} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{priceFormatted}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button type="button" onClick={handleAddMealToCart}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
