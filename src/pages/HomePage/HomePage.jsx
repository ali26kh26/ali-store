import { useCart, useCartActions } from "../../Providers/CartProvider";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import FilterBar from "../../components/filterBar/FilterBar";
import { useProducts } from "../../Providers/productsProvider/ProductProvider";
import styles from "./homePage.module.scss";
import Footer from "../../components/footer/Footer";
import NotMatch from "../../components/notMatch/NotMatch";
const HomePage = () => {
  const filteredProduct = useProducts();
  const [products, setProducts] = useState(null);
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHanler = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success(`${product.name} Added to cart`);
  };
  useEffect(() => {
    getProducts()
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  const renderOption = () => {
    if (filteredProduct) return filteredProduct;
    else return products;
  };
  if (!products) return <p>loading</p>;
  console.log(filteredProduct);

  return (
    <div className={styles.totalContainer}>
      <main className={styles.productListContainer}>
        {filteredProduct && filteredProduct.length === 0 && <NotMatch />}
        {renderOption().map((p) => (
          <section key={p._id} className={styles.poductContainer}>
            <div>
              <img
                className={styles.productImg}
                src={p.image}
                alt={p.description}
              />
            </div>
            <div className={styles.productDescribtion}>
              <p>{p.name}</p>
              <p>$ {p.price}</p>
            </div>

            {cart.findIndex((c) => c._id === p._id) >= 0 ? (
              <button className={styles.btn}>
                <NavLink to="/cart" className={styles.linkToCart}>
                  go to cart
                </NavLink>
              </button>
            ) : (
              <button
                onClick={() => addProductHanler(p)}
                className={styles.btn}
              >
                Add to cart
              </button>
            )}
          </section>
        ))}
      </main>
      <div className={styles.filterBar}>
        <FilterBar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
