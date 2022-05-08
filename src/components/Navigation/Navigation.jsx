import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../../common/searchBar/SearchBar";
import styles from "./Navigation.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import DarkModeButton from "../darkModeButton/DarkModeButton";
import ProfileNav from "../profileNav/ProfileNav";
const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const Auth = useAuth();
  const { cart } = useCart();
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return (
    <nav
      className={styles.mainNavigation}
      style={
        scroll
          ? {
              backgroundColor: "rgba(243, 232, 255, 0.7)",
              backdropFilter: "blur(5px)",
            }
          : {}
      }
    >
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            to="/"
          >
            <AiFillHome />
            Home
          </NavLink>
        </li>
        <li className={styles.navRightSide}>
          {/* <div>
            <SearchBar />
          </div> */}
          <div>
            <DarkModeButton />
          </div>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/cart"
            >
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
          </div>
          <div>
            {/* {Auth ? (
              <ProfileNav />
            ) : (
              <NavLink to="/login">Log in/sign up</NavLink>
            )} */}
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to={Auth ? `profile` : `/login`}
            >
              {Auth ? (
                <p>
                  {" "}
                  <FaUserAlt /> {Auth.name}
                </p>
              ) : (
                <p>
                  <BiLogIn /> Log in/sign up
                </p>
              )}
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
