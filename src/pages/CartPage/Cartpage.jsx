import styles from "./CartPage.module.scss";
import { BsFillTrashFill } from "react-icons/bs";
import CartSummary from "../../components/CartSummary/CartSummary";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { DECREAMENT, INCREAMENT } from "../../features/cart/cartSlice";
const CartPage = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const reduxDispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
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
              <div className={styles.productPrice}>
                price (per item:{p.price}):
                <span> {p.quantity * p.price}$</span>
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={styles.cahangeBtn}
                  onClick={() => {
                    reduxDispatch(DECREAMENT({ product: p }));
                  }}
                >
                  {p.quantity === 1 ? <BsFillTrashFill /> : "-"}
                </button>
                <span>{p.quantity}</span>
                <button
                  className={styles.cahangeBtn}
                  onClick={() => {
                    reduxDispatch(INCREAMENT({ product: p }));
                  }}
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
