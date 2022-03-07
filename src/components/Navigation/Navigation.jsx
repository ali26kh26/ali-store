import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
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
          <NavLink activeClassName="activeLink" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <div>
            <NavLink activeClassName="activeLink" to="/cart">
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
              activeClassName="activeLink"
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
