import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={removeItemHandler}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">
          <span onClick={addItemHandler}>&#10095;</span>
        </div>
      </span>
      <span className="price">{quantity * price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
