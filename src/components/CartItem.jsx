import { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import CartContext from "../store/CartContext";

const CartItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function addMealToCart() {
    cartCtx.addItem(meal);
  }

  function removeMealFromCart() {
    const mealId = meal.id;
    cartCtx.removeItem(mealId);
  }
  return (
    <li className="cart-item">
      <p>
        {meal.name} - {meal.quantity} X {currencyFormatter.format(meal.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={removeMealFromCart}>-</button>
        <span>{meal.quantity}</span>
        <button onClick={addMealToCart}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
