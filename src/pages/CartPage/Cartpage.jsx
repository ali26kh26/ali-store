import { useCart, useCartActions } from "../../Providers/CartProvider";
import styles from "./CartPage.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import CartSummary from "../../components/CartSummary/CartSummary";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  if (!cart.length) return <h2>Cart is empty</h2>;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.productListContainer}>
          {cart.map((p) => (
            <section key={p._id} className={styles.poductContainer}>
              <div className={styles.productImgContainer}>
                <img
                  className={styles.productImg}
                  src={p.image}
                  alt={p.description}
                />
              </div>
              <div className="productDescribtion">
                <p>{p.title}</p>
              </div>
              <div>
                price (per item:{p.price}): $ {p.quantity * p.price}
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={styles.cahangeBtn}
                  onClick={() => dispatch({ type: "DECREAMENT", payload: p })}
                >
                  {p.quantity === 1 ? <BsFillTrashFill /> : "-"}
                </button>
                <span>{p.quantity}</span>
                <button
                  className={styles.cahangeBtn}
                  onClick={() => dispatch({ type: "INCREAMENT", payload: p })}
                >
                  +
                </button>
              </div>
            </section>
          ))}
        </main>
        <CartSummary total={total} />
      </div>
    </>
  );
};

export default CartPage;
