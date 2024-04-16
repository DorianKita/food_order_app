import Logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Restaurant logo" />
        <h1>REACT FOOD</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
