import { useState } from "react";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import DarkModeButton from "../darkModeButton/DarkModeButton";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import styles from "./hamburgerMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";

const HamburgerMenu = () => {
  const [isShow, setIsShow] = useState(false);
  const Auth = useAuth();
  const { cart } = useCart();
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  const clickHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <DarkModeButton />
      <div onClick={clickHandler}>
        <AiOutlineMenu />{" "}
      </div>
      {isShow && (
        <div className={styles.popUp}>
          <ul>
            <li>
              <NavLink to="/cart" onClick={clickHandler}>
                <div className={styles.cartLogo}>
                  <p>
                    <FaShoppingCart />
                    {totalQuantity > 0 && (
                      <span className={styles.cartBadge}>{totalQuantity}</span>
                    )}
                  </p>
                  Cart
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={Auth ? `profile` : `/login`} onClick={clickHandler}>
                {Auth ? (
                  <p>
                    <FaUserAlt /> {Auth.name}
                  </p>
                ) : (
                  <p>
                    <BiLogIn /> Log in/sign up
                  </p>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
