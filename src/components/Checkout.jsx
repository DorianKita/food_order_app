import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/firmatting.js";

export default function Checkout() {
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return (totalPrice += item.price * item.quantity);
  }, 0);

  return <Modal className="" open={}>
    <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
    </form>
  </Modal>;
}
