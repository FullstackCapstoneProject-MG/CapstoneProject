import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

import { Login } from "./";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showLogin, setShowLogin } = useStateContext();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Welcome To SHOP CENTRAL</Link>
      </p>

      <button
        type="button"
        className="login-icon"
        onClick={() => setShowLogin(true)}
      >
        <AiOutlineLogin size={40} />
      </button>
      {showLogin && <Login />}

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart size={30} />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
