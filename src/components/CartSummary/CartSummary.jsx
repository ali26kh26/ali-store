import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import styles from "./CartSummary.module.css";

const CartSummary = ({ total }) => {
  const Auth = useAuth();
  return (
    <div className={styles.container}>
      <h2>Cart summary</h2>
      <hr />
      <p>Total price : {total} $ </p>
      <button className={styles.btn}>
        <NavLink to={Auth ? "/checkout" : "/login?redirect=checkout"}>
          Continue order
        </NavLink>
      </button>
    </div>
  );
};

export default CartSummary;
