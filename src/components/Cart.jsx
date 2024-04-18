import Modal from "./UI/Modal.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/firmatting.js";
import Button from "./UI/Button.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
