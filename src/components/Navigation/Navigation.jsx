import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const Auth = useAuth();
  const { cart } = useCart();
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return (
    <nav className="mainNavigation">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/cart"
            >
              <div className="cartLogo">
                <p>
                  <FaShoppingCart />
                </p>
                {totalQuantity > 0 && (
                  <span className="cartBadge">{totalQuantity}</span>
                )}
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to={Auth ? `profile` : `/login`}
            >
              {Auth ? <p>{Auth.name}</p> : <p>Log in/sign up</p>}
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
