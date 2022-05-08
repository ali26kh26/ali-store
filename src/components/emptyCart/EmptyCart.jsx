import { NavLink } from "react-router-dom";
import logo from "../../utiles/images/emptyCart.png";
import styles from "./emptyCart.module.scss";
const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="empty cart" />
      </div>
      <h2>your cart is empty</h2>
      <NavLink to="/">
        <p className={`${styles.heartbeat} ${styles.link}`}>go to home</p>
      </NavLink>
    </div>
  );
};

export default EmptyCart;
