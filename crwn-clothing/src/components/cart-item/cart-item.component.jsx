import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>${quantity * price}</ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
