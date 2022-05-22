import {
  CheckoutItemContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  QuantityArrow,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles.jsx";

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
    <CheckoutItemContainer>
      <div>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <QuantityArrow>
          <span onClick={removeItemHandler}>&#10094;</span>
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow>
          <span onClick={addItemHandler}>&#10095;</span>
        </QuantityArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{quantity * price}</CheckoutItemPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
